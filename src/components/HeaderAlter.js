import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../globals/styles/Colors';
import { IsUnderMinWidth } from '../globals/styles/DisplaySizes';
import { logout } from '../features/auth/authSlice';
import { deleteSession } from '../db';
import iconLogout from '../../assets/icon-logout.png';

function HeaderAlter({navigation, route, title}) {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(state => state.authReducer.value.localId) !== null;
  const { localId } = useSelector(state => state.authReducer.value);

  const isUnderMinWidth = IsUnderMinWidth();

  const doLogout = async () => {
    dispatch(logout());
    await deleteSession({localId});
  }
  
  return(
    <View style={stylesHeaderAlter.container}>
      <View style={stylesHeaderAlter.row}>
        <View style={stylesHeaderAlter.sideColumn}>

        </View>
        <View style={stylesHeaderAlter.midColumn}>
          <View style={stylesHeaderAlter.title}>
            <Text style={isUnderMinWidth ? stylesHeaderAlter.titleTextMin : stylesHeaderAlter.titleText}>
              {title}
            </Text>
          </View>
        </View>
        <View style={stylesHeaderAlter.sideColumn}>
          { !isLogedIn ? 
            <></> :
            <Pressable onPress={doLogout}>
              <Image source={iconLogout} style={isUnderMinWidth ? stylesHeaderAlter.iconMin : stylesHeaderAlter.icon} />
            </Pressable>
          }
        </View>
      </View>
    </View>
  );
}
    
const stylesHeaderAlter = StyleSheet.create({
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
  title: {
    height: 54,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 28,
    fontFamily: 'Lobster'
  },
  titleTextMin: {
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

export default HeaderAlter;