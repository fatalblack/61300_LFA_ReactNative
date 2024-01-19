import { StyleSheet, Text, View } from 'react-native';

function Footer() {
  return(
    <View style={stylesFooter.container}>
      <Text>Aquí irá el footer</Text>
    </View>
  );
}
    
const stylesFooter = StyleSheet.create({
  container: {
    backgroundColor: '#cceeff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    padding: 10
  },
});

export default Footer;