import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Colors } from '../globals/styles/Colors';
import CategoryList from './categories/CategoryList';
import iconBars from '../../assets/icon-bars.png';
import { useState } from 'react';

function Header({callbackSelectCategory}) {
  const [visibleList, setVisibleList] = useState(false);
  
  const visibleListTrigger = () => {
    setVisibleList(!visibleList);
  }

  return(
    <View style={stylesHeader.container}>
      <View style={stylesHeader.row}>
        <View style={stylesHeader.sideColumn}>
          <Pressable onPress={visibleListTrigger}>
            <Image source={iconBars} style={stylesHeader.icon} />
          </Pressable>
        </View>
        <View style={stylesHeader.midColumn}>
          <View style={stylesHeader.brand}>
            <Text style={stylesHeader.brandText}>Maggie Asian Shop</Text>
          </View>
        </View>
        <View style={stylesHeader.sideColumn}></View>
      </View>
      {
        visibleList ?
          <CategoryList callbackSelectCategory={callbackSelectCategory} visibleList={visibleList}></CategoryList> :
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
    fontSize: 24,
  },
  icon: {
    width: 30,
    height: 30
  },
});

export default Header;