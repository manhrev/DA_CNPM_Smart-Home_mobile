
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import React from 'react'
import axios from 'axios'
import {checkLogin} from '../axios/functions'
import { AuthContext } from '../AuthContext'
import {SERVER_URL} from '@env'

export default function AddUser({ route, navigation }) {
    const [fullName, setFullName] = React.useState("")
    const [userName, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    const createUser = async () => {
        
        try {
            const res = await axios.post(SERVER_URL + '/api/createUser', {
                fullName: fullName,
                userName: userName,
                password: password
            })
            alert("Add user successfully")
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

    const Context = React.useContext(AuthContext)
    React.useEffect(() => {
        const willFocusSubscription = navigation.addListener('focus', () => {
            checkLogin(Context, ()=>{});
        });
        return willFocusSubscription;
    }, [navigation])

    return (
        <View style={styles.container}>

            <Appbar.Header style={{ height: 60 }}>
                <Appbar.BackAction onPress={() => checkLogin(Context, navigation.goBack)} />
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
                        <Button onPress={() => checkLogin(Context, createUser)} mode="outlined" style={{ width: 70 }}>Add</Button>
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
