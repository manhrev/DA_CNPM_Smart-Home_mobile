import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home stack" component={HomeStack}/>
            <Drawer.Screen name="About stack" component={AboutStack}/>
        </Drawer.Navigator>
    )
}