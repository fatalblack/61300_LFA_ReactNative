import { StyleSheet, TextInput, View, Pressable, Image, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';
import iconAdd from '../../../assets/icon-add.png';
import iconCancel from '../../../assets/icon-cancel.png';

function CartForm({callbackAddItem}) {
  const [itemTitle, setItemTitle] = useState("");
  const { height, width } = useWindowDimensions();

  const onAddItemPress = () =>{
    callbackAddItem(itemTitle);
    setItemTitle("");
  };

  const onCleanPress = () =>{
    setItemTitle("");
  };

  return(
    <View style={stylesCartForm.container}>
      <View style={stylesCartForm.col1}>
        <TextInput
          style={width < DisplaySizes.minWidth ? stylesCartForm.inputMin : stylesCartForm.input}
          placeholder='Producto'
          placeholderTextColor={Colors.grayWhite}
          onChangeText={(text) => setItemTitle(text)}
          value={itemTitle}></TextInput>
      </View>
      <View style={stylesCartForm.col2}>
        <View style={stylesCartForm.button}>
          <Pressable onPress={onAddItemPress}>
            <Image source={iconAdd} style={width < DisplaySizes.minWidth ? stylesCartForm.iconMin : stylesCartForm.icon} />
          </Pressable>
          <Pressable onPress={onCleanPress}>
            <Image source={iconCancel} style={width < DisplaySizes.minWidth ? stylesCartForm.iconMin : stylesCartForm.icon} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const stylesCartForm = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0,
    padding: 5
  },
  col1: {
    width: '80%'
  },
  col2: {
    width: '20%'
  },
  input: {
    height: 35,
    padding: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: Colors.white,
    borderWidth: 1,
    borderColor: Colors.blueAlter,
    backgroundColor: Colors.blueAlter,
    fontSize: 20,
    fontWeight: '400'
  },
  inputMin: {
    height: 33,
    padding: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: Colors.white,
    borderWidth: 1,
    borderColor: Colors.blueAlter,
    backgroundColor: Colors.blueAlter,
    fontSize: 18,
    fontWeight: '400'
  },
  button: {
    height: 37,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: Colors.blueAlter,
    borderWidth: 2
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
  },
  iconMin: {
    width: 22,
    height: 22,
    alignSelf: 'flex-end',
  },
});

export default CartForm;