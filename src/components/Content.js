import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Content() {
  return(
    <View style={styles.container}>
      <Text>Hola, Coder!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Content;