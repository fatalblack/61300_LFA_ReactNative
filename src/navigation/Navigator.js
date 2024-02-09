import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/Header';
import Home from '../components/Home';
import Cart from '../components/cart/Cart';
import ProductList from '../components/products/ProductList';
import ProductDetail from '../components/products/ProductDetail';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "Home"
        screenOptions={
          { header: ({navigation}) => <Header navigation={navigation} />}
        }
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );	
}

export default Navigator;