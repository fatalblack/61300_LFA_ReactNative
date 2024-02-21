import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';
import { CartData } from '../../globals/data/CartData';
import CartList from './CartList';

function Cart({navigation}){
  const { height, width } = useWindowDimensions();
  const [list, setList] = useState(CartData);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [total, setTotal] = useState(0);
  const [ isLandscape, setIsLandscape ] = useState(false);

  useEffect(()=>{
    if(width > height){
      setIsLandscape(true);
    }else{
      setIsLandscape(false);
    }
  }, [height, width]);
  
  useEffect(() => {
    setTotal(0);
    list.map(item => setTotal(old => item.subTotal + old));
  },[list]);

  const callbackAddItem = (itemTitle) => {
    setList(old => [...old, {id: currentIndex, title: itemTitle}]);
    setCurrentIndex(currentIndex + 1);
  };
  const callbackDeleteItem = (itemId) => {
    setList(old => old.filter((item) => item.id !== itemId));
    setItemsSubTotal(old => old.filter((item) => item.id !== itemId));
  };

  return(
    <View style={isLandscape ? stylesCart.containerLandscape : stylesCart.container}>
      <CartList list={list} callbackDeleteItem={callbackDeleteItem}></CartList>
      <View>
        <Text style={stylesCart.total}>Total ${total}</Text>
      </View>
    </View>
  );
}

const stylesCart = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'top',
    paddingBottom: DisplaySizes.paddingBottomNavigator
  },
  containerLandscape: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'top',
    paddingBottom: DisplaySizes.paddingBottomNavigatorLandscape
  },
  total: {
    paddingRight: 5,
    fontSize: 18,
    fontFamily: 'JosefinBold',
    textAlign: 'right'
  }
});

export default Cart;