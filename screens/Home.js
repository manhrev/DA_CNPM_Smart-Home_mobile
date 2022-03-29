
import { StyleSheet, Text, View, Button} from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Home({navigation}) {

  return (
    <View style={styles.container}>

      <Appbar.Header style={{ height: 60 }}>
        <Appbar.Action icon="menu" onPress={()=>navigation.openDrawer()}/>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      
      <Button 
        title="Room1" 
        onPress={()=>{
          navigation.navigate('Room', {
            Room: 1 
          })
        }} />
      <Button 
        title="Room2" 
        onPress={()=>{
          navigation.navigate('Room', {
            Room: 2 
          })
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
