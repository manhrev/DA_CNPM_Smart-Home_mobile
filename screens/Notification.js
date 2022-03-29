import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Notification({navigation}) {
  return (
    <View style={styles.container}>

      <Appbar.Header style={{ height: 60 }}>
      <Appbar.Action icon="menu" onPress={()=>navigation.openDrawer()}/>
        <Appbar.Content title="Notification" />
      </Appbar.Header>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
