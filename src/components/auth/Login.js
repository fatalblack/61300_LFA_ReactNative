import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes, IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import { useLoginMutation } from '../../services/authService';
import { setUser } from '../../features/auth/authSlice';
import { signinSchema } from '../../validations/signinSchema';
import { insertSession, deleteSession } from '../../db';
import InputForm from '../forms/InputForm';

function Login({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [triggerSignup, result] = useLoginMutation();

  const isUnderMinWidth = IsUnderMinWidth();

  useEffect(()=>{
    if(result.data){
      dispatch(setUser({email: result.data.email, idToken: result.data.idToken, localId: result.data.localId}));
      
      deleteSession({localId: result.data.localId});

      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken
      })
      .then(result => {
        // acciones adicionales al login exitoso
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: 'Error al iniciar sesión',
          text2: error.message
        });
      });
    }
  }, [result]);

  const onSubmitForm = () => {
    try {
      setEmailError('');
      setPasswordError('');
  
      const validation = signinSchema.validateSync({email, password});
  
      triggerSignup({
        email,
        password
      });

      setEmail('');
      setPassword('');
    }catch(err){
      if(err.path === 'email'){
        setEmailError(err.message);
      }
      if(err.path === 'password'){
        setPasswordError(err.message);
      }
    }
  }

  const onSignupForm = () => {
    navigation.navigate('Signup');
  }

  return(
    <ScrollView style={stylesLogin.container}>
      <View style={stylesLogin.card}>
        <View>
          <Text style={[stylesLogin.title, isUnderMinWidth ? stylesLogin.titleMin : stylesLogin.titleMax]}>
            Datos de la cuenta
          </Text>
        </View>
        <View>
          <InputForm
            isSecure={false}
            label='Email'
            onChangeCallback={setEmail}
            error={emailError}>
          </InputForm>
          <InputForm
            isSecure={true}
            label='Contraseña'
            onChangeCallback={setPassword}
            error={passwordError}>
          </InputForm>
        </View>
        <View style={stylesLogin.colCenter}>
          <Pressable onPress={onSubmitForm} style={stylesLogin.submitButton}>
            <Text style={[stylesLogin.submitText, isUnderMinWidth ? stylesLogin.submitTextMin : stylesLogin.submitTextMax]}>
              Entrar
            </Text>
          </Pressable>
        </View>
        <View style={stylesLogin.colCenter}>
          <Text style={isUnderMinWidth ? stylesLogin.registerTextMin : stylesLogin.registerText}>
            ¿No tienes cuenta aún? 
          </Text>
          <Pressable onPress={onSignupForm}>
            <Text style={isUnderMinWidth ? stylesLogin.registerTextLinkMin : stylesLogin.registerTextLink}>
              Registrarme
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const stylesLogin = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 0,
    padding: 10
  },
  card: {
    flexDirection: 'column',
    padding: 5,
    borderRadius: 10,
    width: '100%',
    backgroundColor: Colors.blueAlter,
    marginBottom: DisplaySizes.paddingBottomNavigator
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
  submitTextMax: {
    fontWeight: '600',
    fontSize: 24,
  },
  submitTextMin: {
    fontWeight: 'bold',
    fontSize: 18,
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

export default Login;