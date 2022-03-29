import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Room from '../screens/Room';
import Device from '../screens/Device';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Room" component={Room} />
            <Stack.Screen name="Device" component={Device} />
        </Stack.Navigator>
    )
}

