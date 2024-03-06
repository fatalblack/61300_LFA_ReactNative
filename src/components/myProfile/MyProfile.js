import { StyleSheet, Image, View, Text, useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';
import AddButton from './AddButton';

function MyProfile({navigation}) {
  const { height, width } = useWindowDimensions();
  const image = useSelector(state => state.authReducer.value.profilePicture);

  const goToImageSelector = () => {
    navigation.navigate('ImageSelector');
  }

  return (
    <View style={stylesMyProfile.container}>
      { image ?
        <Image
        source={{ uri: image }}
        style={stylesMyProfile.image}
        resizeMode='cover' /> :
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
    </View>
  );
  
}

const stylesMyProfile = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 10
  },
  image: {
    width: 96,
    height: 96,
    alignSelf: 'center',
    borderRadius: 48
  }
});

export default MyProfile;