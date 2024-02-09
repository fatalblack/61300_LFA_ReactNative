import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../globals/styles/Colors';
import { DisplaySizes } from '../globals/styles/DisplaySizes';
import CategoryList from './categories/CategoryList';
import iconBars from '../../assets/icon-bars.png';
import iconCart from '../../assets/icon-cart.png';

function Header({callbackSelectCategory, callbackGoToCart}) {
  const [visibleList, setVisibleList] = useState(false);
  const { height, width } = useWindowDimensions();
  
  const visibleListTrigger = () => {
    setVisibleList(!visibleList);
  }

  const onSelectCategory = (id) => {
    setVisibleList(false);
    callbackSelectCategory(id);
  };

  const onGoToCart = () => {
    setVisibleList(false);
    callbackGoToCart();
  };

  return(
    <View style={stylesHeader.container}>
      <View style={stylesHeader.row}>
        <View style={stylesHeader.sideColumn}>
          <Pressable onPress={visibleListTrigger}>
            <Image source={iconBars} style={width < DisplaySizes.minWidth ? stylesHeader.iconMin : stylesHeader.icon} />
          </Pressable>
        </View>
        <View style={stylesHeader.midColumn}>
          <View style={stylesHeader.brand}>
            <Text style={width < DisplaySizes.minWidth ? stylesHeader.brandTextMin : stylesHeader.brandText}>Maggie Asian Shop</Text>
          </View>
        </View>
        <View style={stylesHeader.sideColumn}>
          <Pressable onPress={onGoToCart}>
            <Image source={iconCart} style={width < DisplaySizes.minWidth ? stylesHeader.iconMin : stylesHeader.icon} />
          </Pressable>
        </View>
      </View>
      {
        visibleList ?
          <CategoryList callbackSelectCategory={onSelectCategory} visibleList={visibleList}></CategoryList> :
          <></>
      }
      
    </View>
  );
}
    
const stylesHeader = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.blueMain,
  },
  row: {
    flexDirection: 'row',
  },
  sideColumn: {
    width: '10%',
    justifyContent: 'center',
  },
  midColumn: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  brand: {
    height: 54,
    justifyContent: 'center',
  },
  brandText: {
    fontSize: 28,
    fontFamily: 'Lobster'
  },
  brandTextMin: {
    fontSize: 24,
    fontFamily: 'Lobster'
  },
  icon: {
    width: 30,
    height: 30
  },
  iconMin: {
    width: 26,
    height: 26
  },
});

export default Header;