import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Room from "../screens/Room";
import Device from "../screens/Device";
import AirCondition from "../screens/AirCondition";
import GasCon from "../screens/GasCon";
import Light from "../screens/Light";
import Fan from "../screens/Fan";
const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Homep" component={Home} />
			<Stack.Screen name="Room" component={Room} />
			<Stack.Screen name="AirCondition" component={AirCondition} />
			<Stack.Screen name="GasCon" component={GasCon} />
			<Stack.Screen name="Fan" component={Fan} />
			<Stack.Screen name="Light" component={Light} />
		</Stack.Navigator>
	);
}
