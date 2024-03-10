import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';

function OrderCartRow({item}) {
  const isUnderMinWidth = IsUnderMinWidth();

  return(
    <View style={stylesOrderCartRow.container}>
      <View style={isUnderMinWidth ? stylesOrderCartRow.colImageMin : stylesOrderCartRow.colImage}>
        <Image source={{ uri: item.product.image }} style={stylesOrderCartRow.image} resizeMode='cover' />
      </View>
      <View style={isUnderMinWidth ? stylesOrderCartRow.colDescriptionMin : stylesOrderCartRow.colDescription}>
        <Text style={[stylesOrderCartRow.text, isUnderMinWidth ? stylesOrderCartRow.textMin : stylesOrderCartRow.textMax]}>
          {item.product.title}
        </Text>
        <Text style={[stylesOrderCartRow.text, isUnderMinWidth ? stylesOrderCartRow.textMin : stylesOrderCartRow.textMax]}>
          ${item.subTotal} (${item.product.price} x {item.quantity})
        </Text>
      </View>
    </View>
  );
}

const stylesOrderCartRow = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0,
    marginVertical: 2,
    padding: 4,
    backgroundColor: Colors.pinkAlter,
    borderRadius: 5,
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
  colImage: {
    width: '25%'
  },
  colImageMin: {
    width: '20%'
  },
  colDescription: {
    width: '75%',
    paddingHorizontal: 4
  },
  colDescriptionMin: {
    width: '80%',
    paddingHorizontal: 4
  },
  image: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    borderRadius: 5
  }
});

export default OrderCartRow;