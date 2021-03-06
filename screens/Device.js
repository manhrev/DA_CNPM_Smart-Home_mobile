import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Switch,
} from "react-native";

import { Appbar } from "react-native-paper";
import React, { useState } from "react";

export default function Device({ route, navigation }) {
  const devicename = route.params.Device;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Appbar.Header style={{ height: 60 }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={"Device" + devicename} />
      </Appbar.Header>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
