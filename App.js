import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={stylesHeader.container}>
        <Text>Aquí irá el header de la tienda</Text>
      </View>
      <View style={styles.container}>
        <Text>Hola, Coder!</Text>
        <StatusBar style="auto" />
      </View>
      <View style={stylesFooter.container}>
        <Text>Aquí irá el footer</Text>
      </View>
    </>
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

const stylesHeader = StyleSheet.create({
  container: {
    backgroundColor: '#cceeff',
    alignItems: 'left',
    justifyContent: 'center',
    height: 100,
    padding: 10
  },
});

const stylesFooter = StyleSheet.create({
  container: {
    backgroundColor: '#cceeff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    padding: 10
  },
});