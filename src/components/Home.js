import { StyleSheet, Text, View } from 'react-native';
import { DisplaySizes, IsUnderMinWidth } from '../globals/styles/DisplaySizes';

function Home({navigation}){
  const isUnderMinWidth = IsUnderMinWidth();

  return(
    <View style={styleHome.container}>
      <Text style={[styleHome.textWelcome, isUnderMinWidth ? styleHome.textWelcomeMin : styleHome.textWelcomeMax]}>
        Bienvenido a Maggie Asian Shop
      </Text>
      <Text style={[styleHome.text, isUnderMinWidth ? styleHome.textMin : styleHome.textMax]}>
        Seleccione una categoría de productos del menú o controle su compra en el carrito.
      </Text>
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
      fontFamily: 'PlayFairBold',
      textAlign: 'center'
    },
    textWelcomeMin: {
      marginVertical: 6,
      fontSize: 20,
    },
    textWelcomeMax: {
      marginVertical: 10,
      fontSize: 22,
    },
    text: {
      width: '100%',
      fontFamily: 'PlayFair',
      textAlign: 'justify'
    },
    textMin: {
      fontSize: 16,
    },
    textMax: {
      fontSize: 20,
    },
  });
  
  export default Home;