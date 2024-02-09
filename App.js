import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Fonts } from './src/globals/styles/Fonts';
import Navigator from './src/navigation/Navigator';
import Home from './src/components/Home';

export default function App() {
  const [fontsLoaded] = useFonts(Fonts);
  
  if(!fontsLoaded){
    return null;
  }

  return (
    <SafeAreaView style={stylesApp.container}>
      <StatusBar/>
      <Navigator/>
    </SafeAreaView>
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