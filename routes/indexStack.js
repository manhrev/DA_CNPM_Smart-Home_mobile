import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/Index';
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

export default function IndexStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            
        </Stack.Navigator>
    )
}

