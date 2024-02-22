import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';
import { refreshCartTotal } from '../../features/shop/shopSlice';
import CartList from './CartList';

function Cart({navigation}){
  const dispatch = useDispatch();
  const list = useSelector(state => state.shopReducer.value.cartItems);
  const total = useSelector(state => state.shopReducer.value.cartTotal);
  const { height, width } = useWindowDimensions();
  const [ isLandscape, setIsLandscape ] = useState(false);

  useEffect(()=>{
    if(width > height){
      setIsLandscape(true);
    }else{
      setIsLandscape(false);
    }
  }, [height, width]);
  
  useEffect(() => {
    dispatch(refreshCartTotal());
  },[]);

  return(
    <View style={isLandscape ? stylesCart.containerLandscape : stylesCart.container}>
      <CartList list={list}></CartList>
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