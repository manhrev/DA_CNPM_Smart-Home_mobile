import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserManagement from '../screens/UserManagement';
import AddUser from '../screens/AddUser';


const Stack = createNativeStackNavigator();

export default function ManagementStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="UserManagement" component={UserManagement} />
            <Stack.Screen name="AddUser" component={AddUser} />
        </Stack.Navigator>
    )
}
