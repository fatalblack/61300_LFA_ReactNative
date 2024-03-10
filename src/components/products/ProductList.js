import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes, IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import { setProductSearchText } from '../../features/shop/shopSlice';
import { useGetProductsByCategoryQuery } from '../../services/shopService';
import ProductRow from './ProductRow';
import ProductForm from './ProductForm';

function ProductList({navigation}) {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const searchText = useSelector(state => state.shopReducer.value.productSearchText);
  const categorySelected = useSelector(state => state.shopReducer.value.categorySelected);
  const categoryId = categorySelected.id;
  const { data: products, isLoading, error } = useGetProductsByCategoryQuery(categoryId);

  const isUnderMinWidth = IsUnderMinWidth();

  useEffect(() => {
    if(categoryId != null){
      dispatch(setProductSearchText(""));
      setCurrentCategory(categorySelected);
    }
  },[categoryId]);

  useEffect(() => {
    if(categoryId != null){
      setCurrentCategory(categorySelected);
      if(!isLoading && products){
        setList(Object.values(products).filter(p => p.title.toLowerCase().includes(searchText.toLowerCase())));
      }
    }
  },[searchText, isLoading, products]);

  return(
    <View style={stylesProductList.container}>
      <Text style={[stylesProductList.title, isUnderMinWidth ? stylesProductList.titleMin : stylesProductList.titleMax]}>
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
    paddingBottom: DisplaySizes.paddingBottomNavigatorLandscape,
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
    textAlign: 'center',
    fontFamily: 'JosefinBold',
    color: Colors.black
  },
  titleMin: {
    marginBottom: 8,
    fontSize: 20,
  },
  titleMax: {
    marginBottom: 10,
    fontSize: 24,
  },
});

export default ProductList;