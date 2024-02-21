import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { DisplaySizes } from '../globals/styles/DisplaySizes';

function Home({navigation}){
  const { height, width } = useWindowDimensions();

  return(
    <View style={styleHome.container}>
      <Text style={width < DisplaySizes.minWidth ? styleHome.textWelcomeMin : styleHome.textWelcome}>Bienvenido a Maggie Asian Shop</Text>
      <Text style={width < DisplaySizes.minWidth ? styleHome.textMin : styleHome.text}>Seleccione una categoría de productos del menú o controle su compra en el carrito.</Text>
    </View>
  );
}

const styleHome = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingBottom: DisplaySizes.paddingBottomNavigator
    },
    textWelcome: {
      width: '100%',
      marginVertical: 10,
      fontSize: 22,
      fontFamily: 'PlayFairBold',
      textAlign: 'center'
    },
    textWelcomeMin: {
      width: '100%',
      marginVertical: 6,
      fontSize: 20,
      fontFamily: 'PlayFairBold',
      textAlign: 'center'
    },
    text: {
      width: '100%',
      fontSize: 20,
      fontFamily: 'PlayFair',
      textAlign: 'justify'
    },
    textMin: {
      width: '100%',
      fontSize: 16,
      fontFamily: 'PlayFair',
      textAlign: 'justify'
    },
  });
  
  export default Home;