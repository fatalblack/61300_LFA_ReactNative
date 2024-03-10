import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import iconMap from '../../../assets/icon-map.png';

function AddressRow({navigation, item}) {
  const isUnderMinWidth = IsUnderMinWidth();

  const onSetLocation = () => {
    navigation.navigate("LocationSelector");
  };

  return(
    <View style={stylesAddressRow.container}>
      <View style={stylesAddressRow.colDescription}>
        <Text style={[stylesAddressRow.text, isUnderMinWidth ? stylesAddressRow.textMin : stylesAddressRow.textMax]}>
          {item.address}
        </Text>
      </View>
      <View style={stylesAddressRow.colActions}>
        <Pressable onPress={onSetLocation}>
          <Image source={iconMap} style={isUnderMinWidth ? stylesAddressRow.iconMin : stylesAddressRow.icon} />
          <Text>{item.latitude === '' || item.longitude === '' ? 'Agregar' : 'Cambiar'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const stylesAddressRow = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0,
    marginVertical: 2,
    padding: 4,
    backgroundColor: Colors.pinkAlter,
    borderRadius: 5
  },
  text: {
    color: Colors.grayDark,
    fontFamily: 'PlayFairBold'
  },
  textMin: {
    fontSize: 16,
  },
  textMax: {
    fontSize: 20,
  },
  colDescription: {
    width: '70%',
    paddingHorizontal: 4
  },
  colActions: {
    width: '30%',
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconMin: {
    width: 20,
    height: 20,
  },
});

export default AddressRow;