import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../AuthContext'
import { Appbar, Card, Title, Paragraph, Button } from 'react-native-paper';
import React from 'react'
import  axios from '../axios/axios'
import { checkConnection } from '../axios/functions';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
import Storage from '../helpers/storage/storage'

export default function Logout({navigation}) {
  const Context = React.useContext(AuthContext)
  const logout = () => {
    checkConnection(async () => {
      try {
          const res = await axios.get('/api/logout')
          await Storage.removeItem('role')
          Context.loginDispatch('logout')
          alert("Logged out")
      }
      catch (error) {
          console.log(error.data)
      }
    })
  }

  return (
    <View style={styles.container}>

      <Appbar.Header style={{ height: 60 }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Logout" />
      </Appbar.Header>

      <View style={{ width: '90%', alignSelf: "center", marginTop: 30}}>
      <Card style={styles.card}>
        <Title style={{width: "95%", alignSelf: "center"}}>Alert</Title>
        <Card.Content>
          <Paragraph>You are attempting to logout of SmartHome app. Do you really want to log out?</Paragraph>
          <Button mode="outlined" style={{ alignSelf: 'center', marginTop: 10 }} onPress={ logout}>Logout now</Button>
        </Card.Content>
      </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
