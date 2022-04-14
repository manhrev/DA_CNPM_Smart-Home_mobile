import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../AuthContext";
import React from "react";
import { Appbar, TextInput, Button } from "react-native-paper";
import axios from "../axios/axios";
import { checkConnection } from "../axios/functions";
import Storage from '../helpers/storage/storage'

export default function Login({ navigation }) {
  const Context = React.useContext(AuthContext);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    checkConnection(async () => {
      try {
        const res = await axios.post("/api/login", {
          email: userName,
          password: password,
        });
        alert("Login successfully");
        if (res.data.role == "admin") {
          await Storage.setItem("role", {value: 'admin'});
          Context.loginDispatch("adminLogin");
        } else {
          await Storage.setItem("role", {value: 'normal'});
          Context.loginDispatch("login");
        }
      } catch (error) {
        alert("Wrong username or password!");
        console.log(error);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.nameApp]}>Smart Home </Text>

      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View
          style={{
            height: 300,
            justifyContent: "space-evenly",
            alignSelf: "center",
            width: 350,
          }}
        >
          <Text style={[styles.nameInput]}>UserName </Text>
          <TextInput
            style={{ height: 40 }}
            mode="outlined"
            label="Username"
            value={userName}
            onChangeText={(text) => {
              setUserName(text);
            }}
          />

          <Text style={[styles.nameInput]}>Password</Text>
          <TextInput
            style={{ height: 40 }}
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <View style={{ alignItems: "center" }}>
            <Button
              onPress={login}
              mode="outlined"
              style={{ width: 90 }}
              color="#39AEA9"
            >
              Login
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameApp: {
    fontSize: 50,
    textAlign: "center",
    color: "#39AEA9",
    paddingTop: 100,
    paddingBottom: 30,
    fontWeight: "700",
  },
  nameInput: {
    fontSize: 18,
    color: "#39AEA9",
  },
  inputLog: {},
  buttonLog: {
    paddingTop: 40,
  },
});
