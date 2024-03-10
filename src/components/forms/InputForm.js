import { StyleSheet, TextInput, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';

function InputForm({isSecure, label, onChangeCallback, error, cleanInput = false}) {
  const [input, setInput] = useState('');
  const isUnderMinWidth = IsUnderMinWidth();

  useEffect(() => {
    if (cleanInput) {
      setInput('');
    }
  }, [cleanInput]);

  const onChangeText = (text) => {
    setInput(text);
    onChangeCallback(text);
  }

  return(
    <View style={stylesInputForm.container}>
      <View>
        <Text style={isUnderMinWidth ? stylesInputForm.labelMin : stylesInputForm.label}>
          {label}
        </Text>
      </View>
      <View>
        <TextInput
          style={[stylesInputForm.input, isUnderMinWidth ? stylesInputForm.inputMin : stylesInputForm.inputMax]}
          placeholder={label}
          placeholderTextColor={Colors.grayDark}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
          value={input}></TextInput>
      </View>
      {
        error == "" || error == null ?
        <></> :
        <View style={stylesInputForm.errorContainer}>
          <Text style={isUnderMinWidth ? stylesInputForm.errorTextMin : stylesInputForm.errorText}>
            {error}
          </Text>
        </View>
      }
    </View>
  );
}

const stylesInputForm = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'left',
    flex: 0,
    padding: 5,
    marginBottom: 5,
    width: '100%'
  },
  label:{
    fontSize: 20,
    fontWeight: '400'
  },
  labelMin: {
    fontSize: 18,
    fontWeight: '400'
  },
  input: {
    padding: 3,
    borderRadius: 5,
    color: Colors.black,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    fontWeight: '400'
  },
  inputMin: {
    height: 33,
    fontSize: 14,
  },
  inputMax: {
    height: 35,
    fontSize: 18,
  },
  errorContainer: {
    width: '96%',
    alignSelf: 'center',
    marginBottom: 5,
    padding: 3,
    backgroundColor: Colors.redAlert,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  errorText: {
    color: Colors.white,
    fontSize: 16
  },
  errorTextMin: {
    color: Colors.white,
    fontSize: 14
  }
});

export default InputForm;