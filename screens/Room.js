import { StyleSheet, Text, View, Button, Image, TouchableNativeFeedback } from "react-native";
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

      <View>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate("Light", {
              Device: "Light",
            });
          }}
          background={TouchableNativeFeedback.Ripple("ffffff", false)}
        >
        <View style={{flexDirection: 'row', backgroundColor: '#c4e0f3', width: '98%', alignSelf: 'center', borderRadius: 10, marginTop: 15, paddingVertical: 10}}>
          <View style={{flex: 1, justifyContent: 'center'}}><Text style={{fontSize:26, alignSelf: 'flex-end', paddingHorizontal: 10}}>Light</Text></View>
          <View style={{flex: 1}}><Image style={{paddingHorizontal: 10}} source={require("../assets/lighti.png")} /></View>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            
          }}
          background={TouchableNativeFeedback.Ripple("ffffff", false)}
        >
        <View style={{flexDirection: 'row', backgroundColor: '#c4e0f3', width: '98%', alignSelf: 'center', borderRadius: 10, marginTop: 15, paddingVertical: 10}}>
          <View style={{flex: 1, justifyContent: 'center'}}><Text style={{fontSize:26, alignSelf: 'flex-end', paddingHorizontal: 10}}>Fan</Text></View>
          <View style={{flex: 1}}><Image style={{paddingHorizontal: 10}} source={require("../assets/fani.png")} /></View>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate("AirCondition", {
              Device: "Air Condition",
            });
          }}
          background={TouchableNativeFeedback.Ripple("ffffff", false)}
        >
        <View style={{flexDirection: 'row', backgroundColor: '#c4e0f3', width: '98%', alignSelf: 'center', borderRadius: 10, marginTop: 15, paddingVertical: 10}}>
          <View style={{flex: 1, justifyContent: 'center'}}><Text style={{fontSize:26, alignSelf: 'flex-end', paddingHorizontal: 10}}>Aircondition</Text></View>
          <View style={{flex: 1}}><Image style={{paddingHorizontal: 10}} source={require("../assets/airi.png")} /></View>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate("GasCon", {
              Device: "Gas Concentration",
            });
          }}
          background={TouchableNativeFeedback.Ripple("ffffff", false)}
        >
        <View style={{flexDirection: 'row', backgroundColor: '#c4e0f3', width: '98%', alignSelf: 'center', borderRadius: 10, marginTop: 15, paddingVertical: 10}}>
          <View style={{flex: 1, justifyContent: 'center'}}><Text style={{fontSize:26, alignSelf: 'flex-end', paddingHorizontal: 10}}>Gas</Text></View>
          <View style={{flex: 1}}><Image style={{paddingHorizontal: 10}} source={require("../assets/gasi.png")} /></View>
        </View>
        </TouchableNativeFeedback>
    
      </View>


     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
