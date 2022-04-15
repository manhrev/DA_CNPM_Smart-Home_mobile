import { Dimensions, ImageBackground, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback } from "react-native";
import { Appbar, Card, Title, Paragraph, Button} from "react-native-paper";
import {LineChart} from "react-native-chart-kit";

import React from 'react'
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header style={{ height: 60 }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Report" />
      </Appbar.Header>

      <ScrollView style={{ flex: 1}}>
          <View style={{ width: '96%', alignSelf: "center"}}>
            <Text style={{fontSize: 22, marginLeft: 3, marginTop: 10,fontWeight: 'bold', color: "#6200ee"}}>Average temperature</Text>

                  <LineChart
                      data={{
                          labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
                          datasets: [
                              {
                                  data: [
                                      40,
                                      50,
                                      20,
                                      10,
                                      50,
                                      30,
                                      10,
                                      20,
                                  ]
                              }
                          ]
                      }}
                      width={Dimensions.get("window").width * 96 / 100} // from react-native
                      height={220}
                      yAxisLabel=""
                      yAxisSuffix=""
                      yAxisInterval={1} // optional, defaults to 1
                      chartConfig={{
                          backgroundColor: "#ffffff",
                          backgroundGradientFrom: "#9b42f5",
                          backgroundGradientTo: "#2200ff",
                          decimalPlaces: 2, // optional, defaults to 2dp
                          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          style: {
                              borderRadius: 16
                          },
                          propsForDots: {
                              r: "6",
                              strokeWidth: "2",
                              stroke: "#ffa726"
                          }
                      }}
                      bezier
                      style={{
                          marginVertical: 8,
                          borderRadius: 16
                      }}
                  />

                  <Text style={{ fontSize: 22, marginLeft: 3, marginTop: 10, fontWeight: 'bold', color: "#6200ee" }}>Average humidity</Text>

                  <LineChart
                      data={{
                          labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
                          datasets: [
                              {
                                  data: [
                                      40,
                                      50,
                                      20,
                                      10,
                                      50,
                                      30,
                                      10,
                                      20,
                                  ]
                              }
                          ]
                      }}
                      width={Dimensions.get("window").width * 96 / 100} // from react-native
                      height={220}
                      yAxisLabel=""
                      yAxisSuffix=""
                      yAxisInterval={1} // optional, defaults to 1
                      chartConfig={{
                          backgroundColor: "#ffffff",
                          backgroundGradientFrom: "#9b42f5",
                          backgroundGradientTo: "#2200ff",
                          decimalPlaces: 2, // optional, defaults to 2dp
                          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          style: {
                              borderRadius: 16
                          },
                          propsForDots: {
                              r: "6",
                              strokeWidth: "2",
                              stroke: "#ffa726"
                          }
                      }}
                      bezier
                      style={{
                          marginVertical: 8,
                          borderRadius: 16
                      }}
                  />

        </View>



                
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
