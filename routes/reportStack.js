import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Report from "../screens/Report";

const Stack = createNativeStackNavigator();

export default function ReportStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Report" component={Report} />

    </Stack.Navigator>
  );
}
