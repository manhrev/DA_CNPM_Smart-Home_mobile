import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

function roomIdToName(id) {
  switch (id) {
    case 1: return "Livingroom";
    case 2: return "Bathroom";
    case 3: return "Bedroom";
    case 4: return "Kitchen";
  }
}
export default function Home({ route, navigation }) {
  const roomname = roomIdToName(route.params.Room);

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ height: 60 }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={roomname} />
      </Appbar.Header>

      <Button
        title="Light"
        onPress={() => {
          navigation.navigate("Light", {
            Device: "Light",
          });
        }}
      />
      <Button
        title="Device2"
        onPress={() => {
          navigation.navigate("Device", {
            Device: 2,
          });
        }}
      />

      <Button
        title="Air Condition"
        onPress={() => {
          navigation.navigate("AirCondition", {
            Device: "Air Condition",
          });
        }}
      />

      <Button
        title="Gas Concentration"
        onPress={() => {
          navigation.navigate("GasCon", {
            Device: "Gas Concentration",
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
