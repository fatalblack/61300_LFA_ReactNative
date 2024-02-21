import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { Colors } from '../globals/styles/Colors';
import { DisplaySizes } from '../globals/styles/DisplaySizes';

function HeaderAlter({navigation, route, title}) {
  const { height, width } = useWindowDimensions();
  
  return(
    <View style={stylesHeaderAlter.container}>
      <Text style={width < DisplaySizes.minWidth ? stylesHeaderAlter.titleMin : stylesHeaderAlter.title}>
        {title}
      </Text>
    </View>
  );
}
    
const stylesHeaderAlter = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'top',
    padding: 5,
    borderTopColor: Colors.grayLight,
    borderTopWidth: 1,
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1,
    backgroundColor: Colors.blueMain,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'JosefinBold',
    color: Colors.black
  },
  titleMin: {
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'JosefinBold',
    color: Colors.black
  }
});

export default HeaderAlter;