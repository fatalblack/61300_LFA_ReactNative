import { useEffect } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { DisplaySizes, IsLandscape } from '../../globals/styles/DisplaySizes';
import { Colors } from '../../globals/styles/Colors';
import { refreshCartTotal, cleanCart } from '../../features/shop/shopSlice';
import { usePostOrderMutation } from '../../services/shopService';
import CartList from './CartList';

function Cart({navigation}){
  const dispatch = useDispatch();
  const list = useSelector(state => state.shopReducer.value.cartItems);
  const total = useSelector(state => state.shopReducer.value.cartTotal);
  const localId = useSelector(state => state.authReducer.value.localId);
  const [triggerPost, result] = usePostOrderMutation();

  const isLandscape = IsLandscape();
  
  useEffect(() => {
    dispatch(refreshCartTotal());
  },[]);

  const confirmCart = () => {
    triggerPost({total, buyCartList: list, date: new Date(), user: localId});
    dispatch(cleanCart());
    Toast.show({
      type: 'success',
      text1: '¡Éxito!',
      text2: 'Se confirmó la compra'
    });
  };

  return(
    <View style={[stylesCart.container, isLandscape ? stylesCart.containerLandscape : stylesCart.containerPortrait]}>
      <CartList list={list}></CartList>
      <View style={stylesCart.row}>
        <View style={stylesCart.col}>
          {
            list.length > 0 ?
            <Pressable onPress={confirmCart} style={stylesCart.confirmButton}>
            <Text style={stylesCart.confirmText}>¡Comprar!</Text>
          </Pressable> :
          <></>}
        </View>
        <View style={stylesCart.col}>
          <Text style={stylesCart.total}>Total ${total}</Text>
        </View>
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
  },
  containerLandscape: {
    paddingBottom: DisplaySizes.paddingBottomNavigatorLandscape
  },
  containerPortrait: {
    paddingBottom: DisplaySizes.paddingBottomNavigator
  },
  total: {
    paddingRight: 5,
    paddingTop: 10,
    fontSize: 18,
    fontFamily: 'JosefinBold',
    textAlign: 'right'
  },
  row: {
    flex: 0,
    flexDirection: 'row'
  },
  col: {
    width: '50%'
  },
  confirmButton: {
    height: 36,
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 3,
    backgroundColor: Colors.pinkMain,
    alignSelf: 'flex-start'
  },
  confirmText: {
    fontSize: 18,
    fontFamily: 'JosefinBold',
    lineHeight: 22
  }
});

export default Cart;