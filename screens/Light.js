// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TextInput,
//     Button,
//     TouchableOpacity,
//     Switch,
//   } from "react-native";
//   import { AuthContext } from "../AuthContext";
//   import { Appbar } from "react-native-paper";
//   import React, { useEffect, useState } from "react";
//   import { useFocusEffect } from "@react-navigation/native";
//   export default function Light({ route, navigation }) {
//     const devicename = route.params.Device;
//     const [onoff, setOnoff] = useState(false);
//     const [auto, setAuto] = useState(false);
//     const valueStatus = {};
//     const toggleSwitch = () => {
//       setOnoff((previousState) => !previousState);
//       var data = { value: "3" };
//       if (onoff) {
//         data = { value: "2" };
        
//         // styles.imageOn.display = "none";
//         // styles.imageOff.display = "block";
//         updateStatus("led", data);
//       } else {  
//         // styles.imageOn.display = "block";
//         // styles.imageOff.display = "none";
//         updateStatus("led", data);
//       }
//     };
//     const toggleSwitch2 = () => {
//       setAuto((previousState) => !previousState);
//       var data = { value: "5" };
//       if (auto) {
//         var data = { value: "2" };
//         if (json[0].value > 28) {
//           if (!onoff) {
//             data = { value: "3" };
//             updateStatus("led", data);
//             getStatus("led");
//           }
//         } else {
//           if (onoff) {
//             updateStatus("led", data);
//             getStatus("led");
//           }
//         }
//       }
//     };

//   const updateStatus = async (name, data) => {
//     fetch(`https://io.adafruit.com/api/v2/DAFS/feeds/${name}/data`, {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//         "X-AIO-Key": "aio_vBMA67xXyhjseDFIkOCPODXrIyR0",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => {})
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const Context = React.useContext(AuthContext);
//   // getTemperate();

//   useEffect(() => {
//     let isMounted = true;
//     getTemperate();
//     getStatus("led");
//     getStatus("auto");
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   useEffect(() => {
//     const fetchTem = setInterval(() => {
//       getTemperate();
//       getStatus("led");
//       getStatus("auto");
//     }, []);
  
//     useEffect(() => {
//       const fetchTem = setInterval(() => {
//         getTemperate();
//       }, 5000);
//       return () => clearInterval(fetchTem);
//     });
  
//     //   useFocusEffect(
//     //     React.useCallback(() => {
//     //       var i;
//     //       i = setInterval(getTemperate, 3000);
//     //       return () => {
//     //         clearInterval(i);
//     //       };
//     //     }, [])
//     //   );
  
//     return (
//       <View style={styles.container}>
//         <Appbar.Header style={{ height: 60 }}>
//           <Appbar.BackAction onPress={() => navigation.goBack()} />
//           <Appbar.Content title={devicename} />
//         </Appbar.Header>
//         <View style={styles.containerAir}>
//           <View style={onoff?styles.imageOn:styles.imageOff}>
//             <Image source={require("../assets/light.png")} />
//           </View>
//           <View style={onoff?styles.imageOn:styles.imageOff}>
//             <Image source={require("../assets/light1.png")} />
//           </View>
  
//           <View style={styles.manualHandle}>
//             <Text style={[{ paddingRight: 25 }, styles.textOnOff]}>OFF</Text>
//             {/* On Off*/}
//             <View>
//               <Switch
//                 trackColor={{ false: "#767577", true: "#81b0ff" }}
//                 thumbColor={onoff ? "#f4f3f4" : "#f4f3f4"}
//                 ios_backgroundColor="#3e3e3e"
//                 onValueChange={toggleSwitch}
//                 value={onoff}
//                 style={{
//                   transform: [{ scaleX: 1.9 }, { scaleY: 1.5 }],
//                   flexWrap: "wrap",
//                 }}
//                 disabled={auto}
//               />
//             </View>
//             <Text style={[styles.textOnOff, { paddingLeft: 25 }]}>ON</Text>
//           </View>
  
//           {/*Auto**/}
//           <Text>Auto</Text>
//           <View style={styles.manualHandle}>
//             <Text style={[{ paddingRight: 25 }, styles.textOnOff]}>OFF</Text>
//             {/* On Off**/}
//             <View>
//               <Switch
//                 trackColor={{ false: "#767577", true: "#81b0ff" }}
//                 thumbColor={auto ? "#f4f3f4" : "#f4f3f4"}
//                 ios_backgroundColor="#3e3e3e"
//                 onValueChange={toggleSwitch2}
//                 value={auto}
//                 style={{
//                   transform: [{ scaleX: 1.9 }, { scaleY: 1.5 }],
//                   flexWrap: "wrap",
//                 }}
//               />
//             </View>
//             <Text style={[styles.textOnOff, { paddingLeft: 25 }]}>ON</Text>
//           </View>
//           <Text style={[styles.textOnOff, { paddingLeft: 25 }]}>ON</Text>
//         </View>

//         {/*Auto**/}
//         <Text>Auto</Text>
//         <View style={styles.manualHandle}>
//           <Text style={[{ paddingRight: 25 }, styles.textOnOff]}>OFF</Text>
//           {/* On Off**/}
//           <View>
//             <Switch
//               trackColor={{ false: "#767577", true: "#81b0ff" }}
//               thumbColor={auto ? "#f4f3f4" : "#f4f3f4"}
//               ios_backgroundColor="#3e3e3e"
//               onValueChange={toggleSwitch2}
//               value={auto}
//               style={{
//                 transform: [{ scaleX: 1.9 }, { scaleY: 1.5 }],
//                 flexWrap: "wrap",
//               }}
//             />
//           </View>
//           <Text style={[styles.textOnOff, { paddingLeft: 25 }]}>ON</Text>
//         </View>
//       </View>
//     );
//   });
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     containerAir: {
//       flex: 1,
//       alignItems: "center",
//     },
//     manualHandle: {
//       flex: 1,
//       flexDirection: "row",
//     },
//     textOnOff: {
//       paddingTop: 12,
//       fontWeight: "600",
//     },
//     imageAir: {
//       paddingTop: 40,
//     },
//     imageOn: {
//       paddingTop: 40,
//       display: "flex",
//     },
//     imageOff: {
//       paddingTop: 40,
//       display: "none",

//     },
//     temperate: {
//       fontSize: 30,
//       paddingBottom: 20,
//     },
//     buttonSwitch: {},
//     textAuto: {
//       fontSize: 20,
//       paddingTop: 20,
//     },
//   });
// };

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
import { AuthContext } from "../AuthContext";
import { Appbar } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { AIO_KEY } from "@env";
export default function AirCondition({ route, navigation }) {
  const devicename = route.params.Device;
  const [onoff, setOnoff] = useState(false);
  const [auto, setAuto] = useState(false);
  const valueStatus = {};
  const toggleSwitch = () => {
    setOnoff((previousState) => !previousState);
    var data = { value: "3" };
    if (onoff) {
      data = { value: "2" };
      updateStatus("led", data);
    } else {
      updateStatus("led", data);
    }
  };
  const toggleSwitch2 = () => {
    setAuto((previousState) => !previousState);
    var data = { value: "5" };
    if (auto) {
      data = { value: "4" };
      updateStatus("auto", data);
    } else {
      updateStatus("auto", data);
    }
  };
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getTemperate = async () => {
    try {
      const response = await fetch(
        "https://io.adafruit.com/api/v2/DAFS/feeds/gas/data"
      );
      const json = await response.json();
      setData(json[0].value);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const getStatus = async (name) => {
    try {
      const response = await fetch(
        `https://io.adafruit.com/api/v2/DAFS/feeds/${name}/data`
      );
      const json = await response.json();
      if (name == "led") {
        if (json[0].value == 3) {
          setOnoff(true);
        } else {
          setOnoff(false);
        }
      } else {
        if (json[0].value == 5) {
          setAuto(true);
        } else {
          setAuto(false);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (name, data) => {
    fetch(`https://io.adafruit.com/api/v2/DAFS/feeds/${name}/data`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "X-AIO-Key": `${AIO_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const Context = React.useContext(AuthContext);
  // getTemperate();

  useEffect(() => {
    let isMounted = true;
    getTemperate();
    getStatus("led");
    getStatus("auto");

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const fetchTem = setInterval(() => {
      getTemperate();
    }, 5000);
    return () => clearInterval(fetchTem);
  });

  //   useFocusEffect(
  //     React.useCallback(() => {
  //       var i;
  //       i = setInterval(getTemperate, 3000);
  //       return () => {
  //         clearInterval(i);
  //       };
  //     }, [])
  //   );

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ height: 60 }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={devicename} />
      </Appbar.Header>
      <View style={styles.containerAir}>
        <View style={styles.liOn}>
          {onoff &&
            <Image source={require("../assets/light.png")} />
          }
          {!onoff &&
            <Image source={require("../assets/light1.png")} />
          }
        </View>
        {/* <View style={[{}, onoff?styles.liOff:styles.liOn]}>
          <Image source={require("../assets/light1.png")} />
        </View> */}

        <View style={styles.manualHandle}>
          <Text style={[{ paddingRight: 25 }, styles.textOnOff]}>ON</Text>
          {/* On Off*/}
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={onoff ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={onoff}
              style={{
                transform: [{ scaleX: 1.9 }, { scaleY: 1.5 }],
                flexWrap: "wrap",
              }}
              disabled={auto}
            />
          </View>
          <Text style={[styles.textOnOff, { paddingLeft: 25 }]}>OFF</Text>
        </View>

        {/*Auto**/}
        <Text>Auto</Text>
        <View style={styles.manualHandle}>
          <Text style={[{ paddingRight: 25 }, styles.textOnOff]}>ON</Text>
          {/* On Off**/}
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={auto ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={auto}
              style={{
                transform: [{ scaleX: 1.9 }, { scaleY: 1.5 }],
                flexWrap: "wrap",
              }}
            />
          </View>
          <Text style={[styles.textOnOff, { paddingLeft: 25 }]}>OFF</Text>
        </View>
      </View>
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
  liOn: {
    paddingTop: 40,
  },
  liOff: {
    paddingTop: 40,
    display: "none",
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
