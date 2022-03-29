import { StyleSheet, Text, View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function UserManagement({ navigation, route }) {

    return (
        <View style={styles.container}>

            <Appbar.Header style={{ height: 60 }}>
                <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                <Appbar.Content title="User Management" />
            </Appbar.Header>

            <Button title="Add User" onPress={() => {navigation.navigate('AddUser')} }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
