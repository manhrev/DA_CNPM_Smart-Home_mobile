import { StyleSheet, View, ScrollView } from 'react-native';
import { Appbar, DataTable, Button, IconButton, Portal, Dialog, Paragraph, Provider } from 'react-native-paper';
import React from 'react'
import axios from 'axios';
import {checkLogin} from '../axios/functions'
import { AuthContext } from '../AuthContext'
import {SERVER_URL} from '@env'

export default function UserManagement({ navigation, route }) {
    const [data, setData] = React.useState([])
    const fetchApi = () => {
        checkLogin(Context, async () => {
            try {
                const res = await axios.get(SERVER_URL + '/api/getAllUser')
                setData(res.data.data)
            } catch {
                alert("Error");
            }     
        })
    }

    const Context = React.useContext(AuthContext)
    React.useEffect(() => {
        const willFocusSubscription = navigation.addListener('focus', () => {
            fetchApi()
        });
        return willFocusSubscription;
    }, [navigation])
    return (
        <Provider>
            <View style={styles.container}>

                <Appbar.Header style={{ height: 60 }}>
                    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                    <Appbar.Content title="User Management" />
                    <Appbar.Action icon="reload" onPress={ fetchApi} />
                </Appbar.Header>

                <Button mode="outlined" style={{ height: 40, alignSelf: 'center', marginVertical: 10 }} icon="account-plus"
                    onPress={() => { navigation.navigate('AddUser') }}>
                    Add user
                </Button>


                <DataTable style={{ flex: 1 }}>
                    <DataTable.Header>
                        <DataTable.Title style={{ flex: 2 }}>Username</DataTable.Title>
                        <DataTable.Title style={{ flex: 2 }}>Password</DataTable.Title>
                        <DataTable.Title style={{ flex: 1 }}>Role</DataTable.Title>
                        <DataTable.Title style={{ flex: 1, justifyContent: "center" }}>Action</DataTable.Title>
                    </DataTable.Header>
                    <ScrollView>

                        {data.map((user) => {
                            function Row(props) {
                                const [visible, setVisible] = React.useState();
                                const showDialog = () => setVisible(true);
                                const hideDialog = () => setVisible(false);
                                const [userID, setUserID] = React.useState(props.user._id);
                                const removeUser = async () => {
                                    try {
                                        const res = await axios.post(SERVER_URL+'/api/removeUser', {
                                            userID: userID
                                        })
                                        props.setData(data.filter(dat => dat._id != userID))
                                        alert("Removed!")
                                    }
                                    catch (error) {
                                        console.log(error)
                                    }
                                }

                                return (
                                    <View>
                                        <DataTable.Row>
                                            <DataTable.Cell style={{ flex: 2 }}>{props.user.userName}</DataTable.Cell>
                                            <DataTable.Cell style={{ flex: 2 }}>{props.user.password}</DataTable.Cell>
                                            <DataTable.Cell style={{ flex: 1 }}>{props.user.role}</DataTable.Cell>
                                            <DataTable.Cell style={{ flex: 1, justifyContent: "center" }}>
                                                <IconButton
                                                    icon="delete"
                                                    color="#ff0000"
                                                    size={20}
                                                    onPress={showDialog}
                                                />
                                            </DataTable.Cell>
                                        </DataTable.Row>

                                        {/* Confirm dialog */}
                                        <View>
                                            <Portal>
                                                <Dialog visible={visible} onDismiss={hideDialog}>
                                                    <Dialog.Title>Warning</Dialog.Title>
                                                    <Dialog.Content>
                                                        <Paragraph>Delete user?</Paragraph>
                                                    </Dialog.Content>
                                                    <Dialog.Actions>
                                                        <Button onPress={removeUser}>Accept</Button>
                                                        <Button onPress={hideDialog}>Close</Button>
                                                    </Dialog.Actions>
                                                </Dialog>
                                            </Portal>
                                        </View>
                                    </View>

                                )
                            }
                            return (
                                <Row key={user._id} user={user} data={data} setData={setData} />
                            )

                        })}



                    </ScrollView>
                </DataTable>

            </View>
        </Provider>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
