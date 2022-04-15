import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from '../screens/Notification';


const Stack = createNativeStackNavigator();

export default function NotificationStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Notifications" component={Notification} />

            
        </Stack.Navigator>
    )
}

