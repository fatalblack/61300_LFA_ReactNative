import { createSlice } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

const calculateTotal = (state) => {
  state.value.cartTotal = 0;
  state.value.cartItems.map(item => {
    state.value.cartTotal += item.subTotal;
  });
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    value: {
      orders: [],
      cartItems: [],
      cartTotal: 0,
      currentCartIndex: 4,
      categorySelected: null,
      productIdSelected: null,
      orderCartSelected: null,
      showMenu: false,
      productSearchText: "",
      productModalVisible: false,
      productModalCurrentId: null,
    }
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.value.categorySelected = action.payload;
    },
    setProductIdSelected: (state, action) => {
      state.value.productIdSelected = action.payload;
    },
    setOrderCartSelected: (state, action) => {
      state.value.orderCartSelected = action.payload;
    },
    refreshCartTotal: (state, action) => {
      calculateTotal(state);
    },
    deleteCartItem: (state, action) => {
      state.value.cartItems = state.value.cartItems.filter((item) => item.id !== action.payload);
      
      calculateTotal(state);
    },
    addCartItem: (state, action) => {
      let product = action.payload.product;
      let quantity = action.payload.quantity;
      let productAlreadyAdded = state.value.cartItems.find(p => p.productId === product.id);

      if(productAlreadyAdded && quantity > 0){
        productAlreadyAdded.quantity = quantity;
        productAlreadyAdded.subTotal = product.price * productAlreadyAdded.quantity;
      }else if(!productAlreadyAdded && quantity > 0){
        let productToAdd = {
          id: state.value.currentCartIndex,
          productId: product.id,
          quantity: quantity,
          subTotal: product.price * quantity,
          product: product,
        };
  
        state.value.cartItems = [...state.value.cartItems, productToAdd];
        state.value.currentCartIndex++;
      } else if (productAlreadyAdded && quantity === 0) {
        state.value.cartItems = state.value.cartItems.filter((item) => item.id !== productAlreadyAdded.id);
      }
      
      calculateTotal(state);

      Toast.show({
        type: 'success',
        text1: '¡Éxito!',
        text2: `Se modificó el producto ${product.title} en el carrito.`
      });
    },
    setShowMenu: (state, action) => {
      state.value.showMenu = action.payload;
    },
    setProductSearchText: (state, action) => {
      state.value.productSearchText = action.payload;
    },
    setProductModalVisible: (state, action) => {
      state.value.productModalVisible = action.payload;
    },
    setProductModalCurrentId: (state, action) => {
      state.value.productModalCurrentId = action.payload;
    },
    cleanCart: (state, action) => {
      state.value.cartItems = [];
      state.value.cartTotal = 0;
    },
  }
});

export const {
  setCategorySelected,
  setProductIdSelected,
  setOrderCartSelected,
  refreshCartTotal,
  deleteCartItem,
  addCartItem,
  setShowMenu,
  setProductSearchText,
  setProductModalVisible,
  setProductModalCurrentId,
  cleanCart
 } = shopSlice.actions;

export default shopSlice.reducer;