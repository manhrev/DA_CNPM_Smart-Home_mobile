import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation, route}) {
  const goToReViewHandler = () => {
    navigation.navigate('ReviewDetails')
  }
  return (
    <View style={styles.container}>
      <Text>{route.name}</Text>
      <StatusBar style="auto" />
      <Button title="Go to review" onPress={goToReViewHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
