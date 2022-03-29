import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import NotificationStack from "./notificationStack";
import IndexStack from "./indexStack";
import LogoutStack from "./logoutStack"
import ManagementStack from "./managementStack";

import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { AuthContext } from '../AuthContext'



const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    const Context = React.useContext(AuthContext)
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{headerShown: false}}>
                {Context.loginState  == 0 &&
                    <Drawer.Screen 
                        name="Index stack" 
                        component={IndexStack} 
                        options={{
                            title: "Index",
                        }}
                    />
                }
                {(Context.loginState  == 1 || Context.loginState  == 2) &&
                    <>
                        <Drawer.Screen name="Home stack" component={HomeStack} />
                        {Context.loginState  == 2 &&
                            <Drawer.Screen name="Management stack" component={ManagementStack} />
                        }
                        <Drawer.Screen name="Notification stack" component={NotificationStack}/>
                        <Drawer.Screen name="Logout stack" component={LogoutStack}/>
                    </>
                    
                }
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}