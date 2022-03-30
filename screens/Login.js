import { StyleSheet, Text, View} from 'react-native'
import { AuthContext } from '../AuthContext'
import React from 'react'
import { Appbar, TextInput, Button } from 'react-native-paper'
import axios from 'axios'
import {SERVER_URL} from '@env'
import {checkConnection} from '../axios/functions'

export default function Login({navigation}) {
  const Context = React.useContext(AuthContext)
  const [userName, setUserName] = React.useState("")
  const [password, setPassword] = React.useState("")
  
  const login = () => {
    checkConnection(async () => {
      try {
        const res = await axios.post(SERVER_URL+'/api/login', {
          email: userName,
          password: password
        })
        alert("Login successfully")
        Context.loginDispatch('login')
        console.log(res.data)
      }
      catch (error) {
        alert("Wrong username or password!")
        console.log(error)
      }
    })
  }


  return (
    <View style={styles.container}>

      <Appbar.Header style={{ height: 60 }}>
        {/* <Appbar.BackAction onPress={() => navigation.goBack()} /> */}
        <Appbar.Content title="Login" />
      </Appbar.Header>

      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View style={{ height: 300, justifyContent: 'space-evenly', alignSelf: 'center', width: 350 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 18 }}>Enter user infomation</Text>
          </View>
          <TextInput
            style={{ height: 40 }}
            mode="outlined"
            label="Username"
            value={userName}
            onChangeText={(text) => { setUserName(text) }}
          />
          <TextInput
            style={{ height: 40 }}
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(text) => { setPassword(text) }}
          />
          <View style={{ alignItems: 'center' }}>
            <Button onPress={login} mode="outlined" style={{ width: 90 }}>Login</Button>
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
});
