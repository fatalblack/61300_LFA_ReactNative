import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import ItemForm from './src/components/items/ItemForm';
import ItemList from './src/components/items/ItemList';

export default function App() {
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const addItem = (itemTitle) => {
    setList(old => [...old, {id: currentIndex, title: itemTitle}]);
    setCurrentIndex(currentIndex + 1);
  };
  const deleteItem = (itemId) => {
    setList(old => old.filter((item) => item.id !== itemId));
  };

  return (
    <View style={stylesApp.container}>
      <Header></Header>
      <ItemForm callbackAddItem={addItem}></ItemForm>
      <ItemList list={list} callbackDeleteItem={deleteItem}></ItemList>
    </View>
  );
}

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'top'
  },
});