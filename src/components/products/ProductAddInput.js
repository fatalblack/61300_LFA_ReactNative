import { StyleSheet, TextInput, View, Image, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import { addCartItem } from '../../features/shop/shopSlice';
import iconAdd from '../../../assets/icon-add.png';
import iconMinus from '../../../assets/icon-minus.png';

function ProductAddInput({item}) {
  const dispatch = useDispatch();
  const isUnderMinWidth = IsUnderMinWidth();
  const cart = useSelector(state => state.shopReducer.value.cartItems);
  const [currentQuantity, setCurrentQuantity] = useState(0);

  useEffect(() => {
    if (cart) {
      getCurrentQuantity();
    }
  }, [cart]);

  const onAddProduct = (quantityToAdd) => {
    dispatch(addCartItem({product: item, quantity: quantityToAdd}));

    if(quantityToAdd === 0){
      setCurrentQuantity(0);
    }
  };

  const getCurrentQuantity = () => {
    let itemInCart = cart.find(p => p.productId === item.id);

    if(itemInCart){
      setCurrentQuantity(itemInCart.quantity);
    }
  }

  return(
    <View style={stylesProductAddInput.container}>
      { currentQuantity > 0 ?
        <>
          <Pressable onPress={()=>{onAddProduct(currentQuantity - 1)}}>
            <Image source={iconMinus} style={isUnderMinWidth ? stylesProductAddInput.iconMin : stylesProductAddInput.icon} />
          </Pressable>
          <TextInput
            style={[stylesProductAddInput.input, isUnderMinWidth ? stylesProductAddInput.inputMin : stylesProductAddInput.inputMax]}
            keyboardType = 'numeric'
            onChangeText={(text) => onAddProduct(text)}
            value={currentQuantity.toString()}></TextInput>
        </> :
        <></>
      }
      <Pressable onPress={()=>{onAddProduct(1 + currentQuantity)}}>
        <Image source={iconAdd} style={isUnderMinWidth ? stylesProductAddInput.iconMin : stylesProductAddInput.icon} />
      </Pressable>
    </View>
  );
}

const stylesProductAddInput = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  iconMin: {
    width: 18,
    height: 18,
    alignSelf: 'flex-end',
  },
  image: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    borderRadius: 5
  },
  input: {
    padding: 1,
    color: Colors.black,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.white
  },
  inputMin: {
    height: 33,
    fontSize: 18,
  },
  inputMax: {
    height: 35,
    fontSize: 20,
  },
});

export default ProductAddInput;