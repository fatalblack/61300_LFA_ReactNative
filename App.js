import { StyleSheet, View, StatusBar, SafeAreaView, Platform } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { Fonts } from './src/globals/styles/Fonts';
import Header from './src/components/Header';
import Home from './src/components/Home';
import ItemForm from './src/components/items/ItemForm';
import ItemList from './src/components/items/ItemList';
import ProductList from './src/components/products/ProductList';

export default function App() {
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [showHome, setShowHome] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [fontsLoaded] = useFonts(Fonts);
  
  if(!fontsLoaded){
    return null;
  }

  // items stuff
  const addItem = (itemTitle) => {
    setList(old => [...old, {id: currentIndex, title: itemTitle}]);
    setCurrentIndex(currentIndex + 1);
  };
  const deleteItem = (itemId) => {
    setList(old => old.filter((item) => item.id !== itemId));
  };

  // products stuff
  const changeCategory = (categoryId) => {
    setCurrentCategoryId(categoryId);
    hideAllSites();

    setShowProducts(true);
  };

  const callbackAddProduct = (productId) => {
    console.log(productId);
  }

  // site navigation
  const hideAllSites = () => {
    setShowHome(false);
    setShowCart(false);
    setShowProducts(false);
  };

  const goToCart = () => {
    hideAllSites();

    setShowCart(true);
  };

  return (
    <SafeAreaView style={stylesApp.container}>
      <StatusBar/>
      <Header callbackSelectCategory={changeCategory} callbackGoToCart={goToCart}></Header>
      {
        showHome ?
          <Home></Home> :
          <></>
      }
      {
        showCart ?
          <>
            <ItemForm callbackAddItem={addItem}></ItemForm>
            <ItemList list={list} callbackDeleteItem={deleteItem}></ItemList>
          </> :
          <></>
      }
      {
        showProducts ?
          <ProductList categoryId={currentCategoryId} callbackAddProduct={callbackAddProduct}></ProductList> :
          <></>
      }
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