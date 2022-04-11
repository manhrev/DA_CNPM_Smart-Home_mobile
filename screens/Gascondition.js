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

export default function AirCondition({ route, navigation }) {
  const devicename = route.params.Device;

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ height: 60 }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={devicename} />
      </Appbar.Header>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAir: {
    flex: 1,
    alignItems: "center",
  },
  manualHandle: {
    flex: 1,
    flexDirection: "row",
  },
  textOnOff: {
    paddingTop: 12,
    fontWeight: "600",
  },
  imageAir: {
    paddingTop: 40,
  },
  temperate: {
    fontSize: 30,
    paddingBottom: 20,
  },
  buttonSwitch: {},
  textAuto: {
    fontSize: 20,
    paddingTop: 20,
  },
});
