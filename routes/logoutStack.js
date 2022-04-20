import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logout from '../screens/Logout';


const Stack = createNativeStackNavigator();

export default function NotificationStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Logout page" component={Logout} />

            
        </Stack.Navigator>
    )
}

