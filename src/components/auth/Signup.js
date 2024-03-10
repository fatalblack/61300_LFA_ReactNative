import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes, IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import { useSignUpMutation } from '../../services/authService';
import { signupSchema } from '../../validations/signupSchema';
import InputForm from '../forms/InputForm';

function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [cleanInput, setCleanInput] = useState(false);
  const [triggerSignup, result] = useSignUpMutation();

  const isUnderMinWidth = IsUnderMinWidth();

  useEffect(() => {
    if (cleanInput) {
      setCleanInput(false);
    }
  }, [cleanInput]);

  const onSubmitForm = () => {
    try{
      setEmailError('');
      setPasswordError('');
      setConfirmPasswordError('');

      const validation = signupSchema.validateSync({email, password, confirmPassword});
      
      triggerSignup({
        email,
        password
      });

      setEmail('');
      setPassword('');
      setConfirmPassword('');

      Toast.show({
        type: 'success',
        text1: '¡Éxito!',
        text2: `Se creó el usuario ${email}`
      });

      setCleanInput(true);
      navigation.navigate('Login');
    }catch(err){
      if(err.path === 'email'){
        setEmailError(err.message);
      }
      if(err.path === 'password'){
        setPasswordError(err.message);
      }
      if(err.path === 'confirmPassword'){
        setConfirmPasswordError(err.message);
      }
    }
  }

  const onLoginForm = () => {
    navigation.navigate('Login');
  }

  return(
    <ScrollView style={stylesSignup.container}>
      <View style={stylesSignup.card}>
        <View>
          <Text style={[stylesSignup.title, isUnderMinWidth ? stylesSignup.titleMin : stylesSignup.titleMax]}>
            Datos de la cuenta
          </Text>
        </View>
        <View>
          <InputForm
            isSecure={false}
            label='Email'
            onChangeCallback={setEmail}
            error={emailError}
            cleanInput={cleanInput}>
          </InputForm>
          <InputForm
            isSecure={true}
            label='Contraseña'
            onChangeCallback={setPassword}
            error={passwordError}
            cleanInput={cleanInput}>
          </InputForm>
          <InputForm
            isSecure={true}
            label='Confirmar contraseña'
            onChangeCallback={setConfirmPassword}
            error={confirmPasswordError}
            cleanInput={cleanInput}>
          </InputForm>
        </View>
        <View style={stylesSignup.colCenter}>
          <Pressable onPress={onSubmitForm} style={stylesSignup.submitButton}>
            <Text style={[stylesSignup.submitText, isUnderMinWidth ? stylesSignup.submitTextMin : stylesSignup.submitTextMax]}>
                Crear cuenta
            </Text>
          </Pressable>
        </View>
        <View style={stylesSignup.colCenter}>
          <Text style={isUnderMinWidth ? stylesSignup.registerTextMin : stylesSignup.registerText}>
            ¿Ya tienes cuenta? 
          </Text>
          <Pressable onPress={onLoginForm}>
            <Text style={isUnderMinWidth ? stylesSignup.registerTextLinkMin : stylesSignup.registerTextLink}>
              Iniciar sesión
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const stylesSignup = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  card: {
    flexDirection: 'column',
    padding: 5,
    borderRadius: 10,
    width: '100%',
    backgroundColor: Colors.blueAlter,
    marginBottom: DisplaySizes.paddingBottomNavigatorLandscape
  },
  title: {
    textAlign: 'center',
    fontFamily: 'JosefinBold',
    color: Colors.black
  },
  titleMin: {
    marginBottom: 8,
    fontSize: 20,
  },
  titleMax: {
    marginBottom: 10,
    fontSize: 24,
  },
  colCenter: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  submitButton: {
    height: 40,
    width: '50%',
    alignSelf: 'flex-start',
    padding: 5,
    margin: 10,
    borderRadius: 3,
    backgroundColor: Colors.grayDark
  },
  submitText: {
    color: Colors.white,
    textAlign: 'center',
  },
  submitTextMin: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  submitTextMax: {
    fontWeight: '600',
    fontSize: 24,
  },
  registerText: {
    fontSize: 20,
    color: Colors.grayDark
  },
  registerTextMin: {
    fontSize: 14,
    color: Colors.grayDark
  },
  registerTextLink: {
    marginLeft: 4,
    fontWeight: '600',
    fontSize: 20,
  },
  registerTextLinkMin: {
    marginLeft: 4,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Signup;