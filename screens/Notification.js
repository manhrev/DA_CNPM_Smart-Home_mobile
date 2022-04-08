import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Appbar,Button, Portal, Dialog, Paragraph, Provider, Card, Title } from 'react-native-paper';
import React from 'react'
import axios from '../axios/axios'
import {checkLogin} from '../axios/functions'
import { AuthContext } from '../AuthContext'
import { useFocusEffect } from '@react-navigation/native';

export default function Notification({navigation}) {


  const [data, setData] = React.useState([])
    const fetchApi = () => {
        checkLogin(Context, async () => {
            try {
                const res = await axios.get('/api/getAllNotification')
                setData(res.data)
            } catch {
                alert("Error");
            }     
        })
    }
  const Context = React.useContext(AuthContext)
  useFocusEffect(
    React.useCallback(() => {
      fetchApi()
      var i
      navigation.addListener('focus', () => {
        i = setInterval(fetchApi,3000);
      });
      navigation.addListener('blur', () => {
        clearInterval(i)
      });
      return () => {clearInterval(i)};
    }, [navigation])
  )
  return (
    <Provider>
      <View style={styles.container}>

        <Appbar.Header style={{ height: 60 }}>
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
          <Appbar.Content title="Notification" />
          {/* <Appbar.Action icon="reload" onPress={ fetchApi} /> */}
        </Appbar.Header>


        <ScrollView style={{ flex: 1, paddingTop: 20 }}>
          <View style={{ width: '95%', alignSelf: "center"}}>
            
            {data.map((notification) => {
              function Noty(props) {
                const [visible, setVisible] = React.useState(false);
                const showDialog = () => setVisible(true);
                const hideDialog = () => setVisible(false);
                const [notyID, setNotyID] = React.useState(props.notification._id)
                const removeNotification = () => {
                  checkLogin(Context, async () => {
                    try {
                      const res = await axios.post('/api/removeNotification', {
                        notificationID: notyID
                      })
                      if (res.data) {
                        alert("Success!")
                        fetchApi()
                      }
                      else {
                        alert("Failed!")
                      }
                    }
                    catch (error) {
                      alert("An error occur!")
                    }
                  })
                }
                return (
                  <View>
                    <Card style={styles.card}>
                      <Card.Content>
                        <View style={{ flexDirection: 'row' }}>
                          <View style={{ flex: 1 }}><Title style={{ color: 'dodgerblue' }}>{notification.title}</Title></View>
                          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: "center" }}><Text>{notification.createdAt }</Text></View>
                        </View>
                        <Paragraph>
                        {notification.content}
                        </Paragraph>
                        <Button mode="outlined" style={{ alignSelf: 'flex-end', marginTop: 10 }} onPress={ removeNotification}>Dismiss</Button>
                      </Card.Content>
                    </Card>
                    <View>
                      <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                          <Dialog.Title>Warning</Dialog.Title>
                          <Dialog.Content>
                            <Paragraph>Remove notification?</Paragraph>
                          </Dialog.Content>
                          <Dialog.Actions>
                            <Button onPress={removeNotification}>Accept</Button>
                            <Button onPress={hideDialog}>Close</Button>
                          </Dialog.Actions>
                        </Dialog>
                      </Portal>
                    </View>
                  </View>
                )
              }
              return (
                <Noty key={notification._id} notification={notification} />
              )
            })}
            
            
          


          </View>
        </ScrollView>

      </View>
    </Provider>
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
}
});
