import { StyleSheet, TextInput, View, Pressable, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import { setProductSearchText } from '../../features/shop/shopSlice';
import iconSearch from '../../../assets/icon-search.png';
import iconCancel from '../../../assets/icon-cancel.png';

function ProductForm({lastSearch}) {
  const dispatch = useDispatch();
  const [productToSearch, setProductToSearch] = useState(lastSearch);
  const [error, setError] = useState("");
  
  const isUnderMinWidth = IsUnderMinWidth();

  useEffect(() => {
    setProductToSearch(lastSearch);
  }, [lastSearch]);

  const validateSearchText = () => {
    const expression = /\d/;

    return !expression.test(productToSearch);
  }

  const onSearchProductPress = () =>{
    if(validateSearchText(productToSearch)){
      setError("");
      dispatch(setProductSearchText(productToSearch));
    }else{
      setError("No se admiten números");
    }
  };

  const onCleanPress = () =>{
    setError("");
    setProductToSearch("");
    dispatch(setProductSearchText(""));
  };

  return(
    <>
      <View style={stylesProductForm.container}>
        <View style={stylesProductForm.col1}>
          <TextInput
            style={[stylesProductForm.input, isUnderMinWidth ? stylesProductForm.inputMin : stylesProductForm.inputMax]}
            placeholder='Producto'
            placeholderTextColor={Colors.grayWhite}
            onChangeText={(text) => setProductToSearch(text)}
            value={productToSearch}></TextInput>
        </View>
        <View style={stylesProductForm.col2}>
          <View style={stylesProductForm.button}>
            <Pressable onPress={onSearchProductPress}>
              <Image source={iconSearch} style={isUnderMinWidth ? stylesProductForm.iconMin : stylesProductForm.icon} />
            </Pressable>
            <Pressable onPress={onCleanPress}>
              <Image source={iconCancel} style={isUnderMinWidth ? stylesProductForm.iconMin : stylesProductForm.icon} />
            </Pressable>
          </View>
        </View>
      </View>
      {
        error == "" ?
        <></> :
        <View style={stylesProductForm.errorContainer}>
          <Text style={isUnderMinWidth ? stylesProductForm.errorTextMin : stylesProductForm.errorText}>{error}</Text>
        </View>
      }
    </>
  );
}

const stylesProductForm = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0,
    marginBottom: 5
  },
  col1: {
    width: '80%'
  },
  col2: {
    width: '20%'
  },
  input: {
    padding: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: Colors.white,
    borderWidth: 1,
    borderColor: Colors.blueAlter,
    backgroundColor: Colors.blueAlter,
    fontWeight: '400'
  },
  inputMin: {
    height: 33,
    fontSize: 18,
  },
  inputMax: {
    height: 35,
    fontSize: 20,
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
  errorContainer: {
    width: '100%',
    marginBottom: 5
  },
  errorText: {
    color: Colors.redAlert,
    fontSize: 18
  },
  errorTextMin: {
    color: Colors.redAlert,
    fontSize: 16
  }
});

export default ProductForm;