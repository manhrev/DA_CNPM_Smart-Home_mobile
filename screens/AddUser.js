
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import React from 'react'
import axios from '../axios/axios'
import {checkLogin} from '../axios/functions'
import { AuthContext } from '../AuthContext'


export default function AddUser({ route, navigation }) {
    const [userName, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [role, setRole] = React.useState("")

    const createUser = async () => {
        
        try {
            const res = await axios.post('/api/createUser', {
                role: role,
                userName: userName,
                password: password
            })
            alert("Add user successfully")
            setRole('')
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
                    <TextInput
                        style={{ height: 40 }}
                        mode="outlined"
                        label="Role"
                        value={role}
                        onChangeText={(text) => { setRole(text) }}
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
