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
      <ScrollView style={{ flex: 1}}>
          <View style={{ width: '98%', alignSelf: "center"}}>
            
            <Text style={{fontSize: 26, marginLeft: 3,marginVertical: 10, fontWeight: 'bold', color: "#6200ee"}}>Rooms</Text>

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
                      <View style={{ flex: 1 }}><Title style={{ color: '#6200ee' }}>Livingroom</Title></View>
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
                      <View style={{ flex: 1 }}><Title style={{ color: '#6200ee' }}>Bathroom</Title></View>
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
                      <View style={{ flex: 1 }}><Title style={{ color: '#6200ee' }}>Bedroom</Title></View>
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
                      <View style={{ flex: 1 }}><Title style={{ color: '#6200ee' }}>Kitchen</Title></View>
                      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: "center" }}><Text>4 devices</Text></View>
                    </View>
                  </Card.Content>
                </Card>
            </TouchableNativeFeedback>

          </View>



          
      </ScrollView>
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
