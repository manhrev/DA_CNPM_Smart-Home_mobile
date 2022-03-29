import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthContext } from '../AuthContext'
import { Appbar } from 'react-native-paper';
import React from 'react'
import  axios from 'axios'

export default function Logout({navigation}) {
  const Context = React.useContext(AuthContext)
  const logout = async () => {
    try {
        const res = await axios.get('http://192.168.2.6:80/api/logout')
        Context.loginDispatch('logout')
        alert("Logout success")
    }
    catch (error) {
        console.log(error.data)
    }
  }

  return (
    <View style={styles.container}>

      <Appbar.Header style={{ height: 60 }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Logout" />
      </Appbar.Header>

      <Button title="Logout now" onPress={logout}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
