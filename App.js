import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import ItemForm from './src/components/items/ItemForm';
import ItemList from './src/components/items/ItemList';

export default function App() {
  const [list, setList] = useState(['Ramen', 'Soju', 'Pepero']);

  return (
    <View style={stylesApp.container}>
      <Header></Header>
      <ItemForm></ItemForm>
      <ItemList list={list}></ItemList>
    </View>
  );
}

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'top',
  },
});