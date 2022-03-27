import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
            
            
        </Stack.Navigator>
    )
}

