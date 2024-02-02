import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../globals/styles/Colors';

function ItemForm({callbackAddItem}) {
  const [itemTitle, setItemTitle] = useState("");

  const onAddItemPress = () =>{
    callbackAddItem(itemTitle);
    setItemTitle("");
  };

  return(
    <View style={stylesItemForm.container}>
      <View style={stylesItemForm.col1}>
        <TextInput
          style={stylesItemForm.input}
          placeholder='Producto'
          onChangeText={(text) => setItemTitle(text)}
          value={itemTitle}></TextInput>
      </View>
      <View style={stylesItemForm.col2}>
        <Pressable style={stylesItemForm.button} onPress={onAddItemPress}>
          <Text style={stylesItemForm.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const stylesItemForm = StyleSheet.create({
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
    color: Colors.grayDark,
    borderWidth: 1,
    borderColor: Colors.grayDark,
    fontSize: 18,
    fontWeight: '400'
  },
  button: {
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: Colors.blueAlter,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 18,
  }
});

export default ItemForm;