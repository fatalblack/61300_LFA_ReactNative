import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import Store from './src/store';
import { Fonts } from './src/globals/styles/Fonts';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  const [fontsLoaded] = useFonts(Fonts);
  
  if(!fontsLoaded){
    return null;
  }

  return (
    <Provider store={Store}>
      <SafeAreaView style={stylesApp.container}>
        <StatusBar/>
        <TabNavigator/>
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