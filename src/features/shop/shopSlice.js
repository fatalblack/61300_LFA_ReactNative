import { createSlice } from '@reduxjs/toolkit';
import { CategoryData } from '../../globals/data/CategoryData';
import { ProductData } from '../../globals/data/ProductData';
import { OrderData } from '../../globals/data/OrderData';
import { CartData } from '../../globals/data/CartData';

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
      categories: CategoryData,
      products: ProductData,
      orders: OrderData,
      cartItems: CartData,
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
      let productToAdd = {
        id: state.value.currentCartIndex,
        productId: product.id,
        quantity: quantity,
        subTotal: product.price * quantity,
        product: product,
      };

      state.value.cartItems = [...state.value.cartItems, productToAdd];
      state.value.currentCartIndex++;
      
      calculateTotal(state);
      console.log("se agregó el producto al carrito, falta crear una alerta de esto xD", action.payload);
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
  setProductModalCurrentId
 } = shopSlice.actions;

export default shopSlice.reducer;