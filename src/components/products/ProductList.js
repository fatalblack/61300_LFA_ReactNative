import { StyleSheet, Text, View, FlatList, useWindowDimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';
import { CategoryData } from '../../globals/data/CategoryData';
import { ProductData } from '../../globals/data/ProductData';
import ProductRow from './ProductRow';
import ProductForm from './ProductForm';

function ProductList({navigation, route}) {
  const [list, setList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [searchText, setSearchText] = useState("");
  const { height, width } = useWindowDimensions();
  const {categoryId} = route.params;

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
      <Text style={width < DisplaySizes.minWidth ? stylesProductList.titleMin : stylesProductList.title}>
        {currentCategory?.title}
      </Text>
      <ProductForm callbackSearchProduct={callbackSearchProduct} lastSearch={searchText}></ProductForm>
      { list.length > 0 ?
        <FlatList
          data={list}
          renderItem={({item}) => <ProductRow
            item={item}
            navigation={navigation} />}
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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'top',
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: DisplaySizes.paddingBottomNavigator,
    borderTopColor: Colors.grayLight,
    borderTopWidth: 1,
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1
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
  },
  titleMin: {
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'JosefinBold',
    color: Colors.black
  }
});

export default ProductList;