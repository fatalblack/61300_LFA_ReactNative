import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import Store from './src/store';
import { Fonts } from './src/globals/styles/Fonts';
import MainNavigator from './src/navigation/MainNavigator';
import { init } from './src/db';
import CustomToast from './src/components/shared/CustomToast';

init()
  .then(() => {
    // acciones adicionales a la inicialización exitoso de la DB
  })
  .catch(error => {
    Toast.show({
      type: 'error',
      text1: 'Error al inicializar la DB',
      text2: error.message
    });
  });

export default function App() {
  const [fontsLoaded] = useFonts(Fonts);
  
  if(!fontsLoaded){
    return null;
  }

  return (
    <Provider store={Store}>
      <SafeAreaView style={stylesApp.container}>
        <StatusBar/>
        <MainNavigator/>
        <CustomToast />
      </SafeAreaView>
    </Provider>
  );
}

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'top',
    paddingTop: Platform.OS !== 'android' ? StatusBar.currentHeight : 0
  },
});