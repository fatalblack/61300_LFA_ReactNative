import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Colors } from '../../globals/styles/Colors';
import { CategoryData } from '../../globals/data/CategoryData';
import { ProductData } from '../../globals/data/ProductData';
import ProductRow from './ProductRow';
import ProductForm from './ProductForm';

function ProductList({categoryId, callbackAddProduct}) {
  const [list, setList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if(categoryId != null){
      setSearchText("");
    }
  },[categoryId]);

  useEffect(() => {
    if(categoryId != null){
      setCurrentCategory(CategoryData.find(c => c.id == categoryId));
      setList(ProductData.filter(p => p.categoryId == categoryId && p.title.toLowerCase().includes(searchText.toLowerCase())));
    }
  },[categoryId, searchText]);

  const callbackSearchProduct = (text) => {
    setSearchText(text);
  };

  return(
    <View style={stylesProductList.container}>
      <Text style={stylesProductList.title}>{currentCategory?.title}</Text>
      <ProductForm callbackSearchProduct={callbackSearchProduct} lastSearch={searchText}></ProductForm>
      { list.length > 0 ?
        <FlatList
          data={list}
          renderItem={({item}) => <ProductRow item={item} callbackAddProduct={callbackAddProduct} />}
          keyExtractor={item => item.id}
        />
         :
        <Text style={stylesProductList.emptyLabel}>No se encontraron productos en {currentCategory?.title} </Text>
      }
    </View>
  );
}

const stylesProductList = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'top',
    padding: 5,
    borderTopColor: Colors.grayLight,
    borderTopWidth: 1,
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1,
  },
  emptyLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic'
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'JosefinBold',
    color: Colors.black
  }
});

export default ProductList;