import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback } from "react-native";
import { Appbar, Card, Title, Paragraph, Button} from "react-native-paper";
import React from 'react'
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header style={{ height: 60 }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <ScrollView style={{ flex: 1, paddingTop: 20 }}>
          <View style={{ width: '95%', alignSelf: "center"}}>

            <TouchableNativeFeedback
              onPress={() => {
                navigation.navigate("Room", {
                  Room: 1,
                });
              }}
              background={TouchableNativeFeedback.Ripple("ffffff", false)}
            >         
                <Card style={styles.card}>
                <Card.Cover source={require("../assets/livingroom.jpg")} />
                  <Card.Content>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flex: 1 }}><Title style={{ color: 'dodgerblue' }}>Livingroom</Title></View>
                      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: "center" }}><Text>4 devices</Text></View>
                    </View>
                  </Card.Content>
                </Card>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => {
                navigation.navigate("Room", {
                  Room: 2,
                });
              }}
              background={TouchableNativeFeedback.Ripple("ffffff", false)}
            >         
                <Card style={styles.card}>
                <Card.Cover source={require("../assets/bathroom.jpg")} />
                  <Card.Content>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flex: 1 }}><Title style={{ color: 'dodgerblue' }}>Bathroom</Title></View>
                      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: "center" }}><Text>4 devices</Text></View>
                    </View>
                  </Card.Content>
                </Card>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => {
                navigation.navigate("Room", {
                  Room: 3,
                });
              }}
              background={TouchableNativeFeedback.Ripple("ffffff", false)}
            >         
                <Card style={styles.card}>
                <Card.Cover source={require("../assets/bedroom.jpg")} />
                  <Card.Content>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flex: 1 }}><Title style={{ color: 'dodgerblue' }}>Bedroom</Title></View>
                      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: "center" }}><Text>4 devices</Text></View>
                    </View>
                  </Card.Content>
                </Card>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => {
                navigation.navigate("Room", {
                  Room: 4,
                });
              }}
              background={TouchableNativeFeedback.Ripple("ffffff", false)}
            >         
                <Card style={styles.card}>
                <Card.Cover source={require("../assets/kitchen.jpg")} />
                  <Card.Content>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flex: 1 }}><Title style={{ color: 'dodgerblue' }}>Kitchen</Title></View>
                      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: "center" }}><Text>4 devices</Text></View>
                    </View>
                  </Card.Content>
                </Card>
            </TouchableNativeFeedback>

          </View>
          <View style={{height: 20}}></View>
      </ScrollView>
      {/* <Button
        title="Room1"
        onPress={() => {
          navigation.navigate("Room", {
            Room: 1,
          });
        }}
      />
      <Button
        title="Room2"
        onPress={() => {
          navigation.navigate("Room", {
            Room: 2,
          });
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
