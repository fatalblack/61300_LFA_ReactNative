import { StyleSheet, Text, View } from 'react-native';

function Header() {
  return(
    <View style={stylesHeader.container}>
      <Text>Aquí irá el header de la tienda</Text>
    </View>
  );
}
    
const stylesHeader = StyleSheet.create({
  container: {
    backgroundColor: '#cceeff',
    alignItems: 'left',
    justifyContent: 'center',
    height: 100,
    padding: 10
  },
});

export default Header;