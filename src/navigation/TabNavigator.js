import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../globals/styles/Colors';
import { IsLandscape } from '../globals/styles/DisplaySizes';
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import OrderNavigator from './OrderNavigator';
import MyProfileNavigator from './MyProfileNavigator';
import iconShop from '../../assets/icon-shop.png';
import iconCart from '../../assets/icon-cart.png';
import iconList from '../../assets/icon-list.png';
import iconUser from '../../assets/icon-user.png';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {  
  const isLandscape = IsLandscape();

  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [stylesTabNavigator, isLandscape ? stylesTabNavigator.tabBarLandscape : stylesTabNavigator.tabBarPortrait]
      }}
    >
      <Tab.Screen
        name='ShopTab'
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused ? stylesTabNavigator.buttonFocused : stylesTabNavigator.button}>
                <Image source={iconShop} style={isLandscape ? stylesTabNavigator.iconLandscape : stylesTabNavigator.icon} />
              </View>
            );
          }
        }} />
      <Tab.Screen
        name='CartTab'
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused ? stylesTabNavigator.buttonFocused : stylesTabNavigator.button}>
                <Image source={iconCart} style={isLandscape ? stylesTabNavigator.iconLandscape : stylesTabNavigator.icon} />
              </View>
            );
          }
        }} />
      <Tab.Screen
        name='OrderTab'
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused ? stylesTabNavigator.buttonFocused : stylesTabNavigator.button}>
                <Image source={iconList} style={isLandscape ? stylesTabNavigator.iconLandscape : stylesTabNavigator.icon} />
              </View>
            );
          }
        }} />
      <Tab.Screen
        name='MyProfileTab'
        component={MyProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused ? stylesTabNavigator.buttonFocused : stylesTabNavigator.button}>
                <Image source={iconUser} style={isLandscape ? stylesTabNavigator.iconLandscape : stylesTabNavigator.icon} />
              </View>
            );
          }
        }} />
    </Tab.Navigator>
  );
}

const stylesTabNavigator = StyleSheet.create({
  tabBar: {
    flex: 0,
    backgroundColor: Colors.blueMain,
    shadowColor: 'black',
    elevation: 4,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 5,
  },
  tabBarLandscape: {
    bottom: 10,
    height: 40
  },
  tabBarPortrait: {
    bottom: 20,
    height: 60
  },
  buttonFocused: {
    padding: 5,
    backgroundColor: Colors.blueAlter,
    borderRadius: 5
  },
  button: {
    padding: 5,
    backgroundColor: 'transparent',
  },
  icon: {
    width: 26,
    height: 26
  },
  iconLandscape: {
    width: 20,
    height: 20
  },
});

export default TabNavigator;