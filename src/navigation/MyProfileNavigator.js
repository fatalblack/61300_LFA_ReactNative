import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderAlter from '../components/HeaderAlter';
import MyProfile from '../components/myProfile/MyProfile';
import ImageSelector from '../components/myProfile/ImageSelector';

const Stack = createNativeStackNavigator();

const MyProfileNavigator = () => {
  return(
      <Stack.Navigator
        initialRouteName = "MyProfile"
        screenOptions={
          { header: ({navigation, route}) => <HeaderAlter
            navigation={navigation}
            route={route}
            title={
              route.name === 'MyProfile' ?
                'Mi perfil' :
              route.name === 'ImageSelector' ?
                'Foto de perfil' :
                '¿¿??'
            } />}
        }
      >
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
        />
        <Stack.Screen
          name="ImageSelector"
          component={ImageSelector}
        />
      </Stack.Navigator>
  );	
}

export default MyProfileNavigator;