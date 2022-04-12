import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Room from "../screens/Room";
import Device from "../screens/Device";
import AirCondition from "../screens/AirCondition";
import GasCon from "../screens/GasCon";
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Room" component={Room} />
      <Stack.Screen name="AirCondition" component={AirCondition} />
      <Stack.Screen name="GasCon" component={GasCon} />
      <Stack.Screen name="Device" component={Device} />
    </Stack.Navigator>
  );
}
