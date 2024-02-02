import { StyleSheet, Text, View } from 'react-native';

function Home(){
    return(
        <View style={styleHome.container}>
            <Text style={styleHome.textWelcome}>Bienvenido a Maggie Asian Shop</Text>
            <Text style={styleHome.text}>Seleccione una categoría de productos del menú o controle su compra en el carrito.</Text>
        </View>
    );
}

const styleHome = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    textWelcome: {
      marginVertical: 10,
      fontSize: 22,
      fontFamily: 'PlayFairBold'
    },
    text: {
      fontSize: 20,
      fontFamily: 'PlayFair'
    },
  });
  
  export default Home;