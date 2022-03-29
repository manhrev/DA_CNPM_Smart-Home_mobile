
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function AddUser({ route, navigation }) {

    return (
        <View style={styles.container}>

            <Appbar.Header style={{ height: 60 }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Add user" />
            </Appbar.Header>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
