import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Fonts } from './src/globals/styles/Fonts';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  const [fontsLoaded] = useFonts(Fonts);
  
  if(!fontsLoaded){
    return null;
  }

  return (
    <SafeAreaView style={stylesApp.container}>
      <StatusBar/>
      <TabNavigator/>
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