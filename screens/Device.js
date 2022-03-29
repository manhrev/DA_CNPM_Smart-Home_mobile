
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Device({ route, navigation }) {
    const devicename = route.params.Device
    return (
        <View style={styles.container}>

            <Appbar.Header style={{ height: 60 }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title={"Device" + devicename} />
            </Appbar.Header>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
