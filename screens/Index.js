import { StyleSheet, Text, View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Index({navigation, route}) {

  return (
    <View style={styles.container}>

      <Appbar.Header style={{ height: 60 }}>
        <Appbar.Content title="Index" />
      </Appbar.Header>

      <Button title="Login" onPress={() => navigation.navigate('Login')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
