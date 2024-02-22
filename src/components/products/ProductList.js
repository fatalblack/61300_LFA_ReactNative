import { StyleSheet, Text, View, FlatList, useWindowDimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';
import { setProductSearchText } from '../../features/shop/shopSlice';
import ProductRow from './ProductRow';
import ProductForm from './ProductForm';

function ProductList({navigation}) {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const { height, width } = useWindowDimensions();
  const searchText = useSelector(state => state.shopReducer.value.productSearchText);
  const categorySelected = useSelector(state => state.shopReducer.value.categorySelected);
  const categoryId = categorySelected.id;
  const products = useSelector(state => state.shopReducer.value.products);

  useEffect(() => {
    if(categoryId != null){
      dispatch(setProductSearchText(""));
    }
  },[categoryId]);

  useEffect(() => {
    if(categoryId != null){
      setCurrentCategory(categorySelected);
      setList(products.filter(p => p.categoryId == categoryId && p.title.toLowerCase().includes(searchText.toLowerCase())));
    }
  },[categoryId, searchText]);

  return(
    <View style={stylesProductList.container}>
      <Text style={width < DisplaySizes.minWidth ? stylesProductList.titleMin : stylesProductList.title}>
        {currentCategory?.title}
      </Text>
      <ProductForm lastSearch={searchText}></ProductForm>
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