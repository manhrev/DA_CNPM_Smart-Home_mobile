
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import React from 'react'
import axios from 'axios'
import checkLogin from '../axios/functions'
import { AuthContext } from '../AuthContext'

export default function AddUser({ route, navigation }) {
    const Context = React.useContext(AuthContext)
    const [fullName, setFullName] = React.useState("")
    const [userName, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    const createUser = async () => {
        if( checkLogin(Context) ) {
            try {
                const res = await axios.post('http://192.168.2.6:80/api/createUser', {
                    fullName: fullName,
                    userName: userName,
                    password: password
                })
                // alert("Add user successfully")
                setFullName('')
                setUserName('')
                setPassword('')

                navigation.goBack()
            }
            catch (error) {
                console.log(error)
                alert("Failed!")
            }
        }
        
    }

    return (
        <View style={styles.container}>

            <Appbar.Header style={{ height: 60 }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Add user" />
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
                        value={fullName}
                        onChangeText={(text) => { setFullName(text) }}
                    />
                    <TextInput
                        style={{ height: 40 }}
                        mode="outlined"
                        label="Password"
                        value={userName}
                        onChangeText={(text) => { setUserName(text) }}
                    />
                    <TextInput
                        style={{ height: 40 }}
                        mode="outlined"
                        label="Role"
                        value={password}
                        onChangeText={(text) => { setPassword(text) }}
                    />
                    <View style={{ alignItems: 'center' }}>
                        <Button onPress={createUser} mode="outlined" style={{ width: 70 }}>Add</Button>
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
