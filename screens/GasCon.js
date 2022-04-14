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
export default function GasConcentration({ route, navigation }) {
  const devicename = route.params.Device;
  const [data, setData] = useState([]);
  const [loanding, setLoading] = useState(false);

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

  const Context = React.useContext(AuthContext);
  useEffect(() => {
    getTemperate();
  }, []);
  useEffect(() => {
    const fetchTem = setInterval(() => {
      getTemperate();
    }, 5000);
    return () => clearInterval(fetchTem);
  });

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ height: 60 }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={devicename} />
      </Appbar.Header>
      <View style={styles.containerGas}>
        <View>
          <Image
            style={styles.imageGas}
            source={require("../assets/zyro-image.png")}
          />
        </View>
        <Text style={styles.label}>Gas Concentration:</Text>
        <Text style={styles.valueGas}>{data} ppm</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerGas: {
    flex: 1,
    alignItems: "center",
  },
  imageGas: {
    width: 300,
    resizeMode: "cover",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  valueGas: {
    fontSize: 15,
  },
});
