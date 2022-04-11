import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

export default function Home({ route, navigation }) {
  const roomname = route.params.Room;

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ height: 60 }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={"Room" + roomname} />
      </Appbar.Header>

      <Button
        title="Device1"
        onPress={() => {
          navigation.navigate("Device", {
            Device: 1,
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
