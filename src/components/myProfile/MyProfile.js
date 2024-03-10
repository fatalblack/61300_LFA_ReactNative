import { StyleSheet, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes, IsLandscape } from '../../globals/styles/DisplaySizes';
import AddButton from './AddButton';

function MyProfile({navigation}) {
  const image = useSelector(state => state.authReducer.value.profilePicture);

  const isLandscape = IsLandscape();

  const goToImageSelector = () => {
    navigation.navigate('ImageSelector');
  }

  const goToAddressList = () => {
    navigation.navigate('AddressList');
  }

  return (
    <ScrollView style={[stylesMyProfile.container, isLandscape ? stylesMyProfile.containerLandscape : stylesMyProfile.containerPortrait]}>
      { image ?
        <>
          <Image
          source={{ uri: image }}
          style={stylesMyProfile.image}
          resizeMode='cover' />
          <AddButton
            title='Cambiar foto de perfil'
            onPress={goToImageSelector} />
        </> :
        <>
          <Image
            source={require('../../../assets/user-photo.png')}
            style={stylesMyProfile.image}
            resizeMode='cover' />
          <AddButton
            title='Agregar foto de perfil'
            onPress={goToImageSelector} />
        </>
      }
      <AddButton
        title='Mis ubicaciones'
        onPress={goToAddressList} />
    </ScrollView>
  );
  
}

const stylesMyProfile = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    width: '100%',
    paddingTop: 10,
  },
  containerLandscape: {
    marginBottom: DisplaySizes.paddingBottomNavigatorLandscape,
  },
  containerPortrait: {
    marginBottom: DisplaySizes.paddingBottomNavigator,
  },
  image: {
    width: 96,
    height: 96,
    alignSelf: 'center',
    borderRadius: 48
  }
});

export default MyProfile;