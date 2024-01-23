import { StyleSheet, Text, View } from 'react-native';

function Header() {
  return(
    <View style={stylesHeader.container}>
      <Text style={stylesHeader.brand}>Maggie Asian Shop</Text>
    </View>
  );
}
    
const stylesHeader = StyleSheet.create({
  container: {
    height: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cceeff',
  },
  brand: {
    fontSize: 24,
  }
});

export default Header;