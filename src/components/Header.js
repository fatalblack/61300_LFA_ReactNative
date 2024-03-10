import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../globals/styles/Colors';
import { IsUnderMinWidth } from '../globals/styles/DisplaySizes';
import { setShowMenu } from '../features/shop/shopSlice';
import { logout } from '../features/auth/authSlice';
import { deleteSession } from '../db';
import CategoryList from './categories/CategoryList';
import iconBars from '../../assets/icon-bars.png';
import iconLogout from '../../assets/icon-logout.png';

function Header({navigation}) {
  const dispatch = useDispatch();
  const showMenu = useSelector(state => state.shopReducer.value.showMenu);
  const { localId } = useSelector(state => state.authReducer.value);

  const isUnderMinWidth = IsUnderMinWidth();
  
  const visibleListTrigger = () => {
    dispatch(setShowMenu(!showMenu));
  }

  const doLogout = async () => {
    dispatch(logout());
    await deleteSession({localId});
  }

  return(
    <View style={stylesHeader.container}>
      <View style={stylesHeader.row}>
        <View style={stylesHeader.sideColumn}>
          <Pressable onPress={visibleListTrigger}>
            <Image source={iconBars} style={isUnderMinWidth ? stylesHeader.iconMin : stylesHeader.icon} />
          </Pressable>
        </View>
        <View style={stylesHeader.midColumn}>
          <View style={stylesHeader.brand}>
            <Text style={isUnderMinWidth ? stylesHeader.brandTextMin : stylesHeader.brandText}>Maggie Asian Shop</Text>
          </View>
        </View>
        <View style={stylesHeader.sideColumn}>
          <Pressable onPress={doLogout}>
            <Image source={iconLogout} style={isUnderMinWidth ? stylesHeader.iconMin : stylesHeader.icon} />
          </Pressable>
        </View>
      </View>
      {
        showMenu ?
          <CategoryList
            navigation={navigation}></CategoryList> :
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