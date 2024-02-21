import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';

function OrderCartRow({item}) {
  const { height, width } = useWindowDimensions();

  return(
    <View style={stylesOrderCartRow.container}>
      <View style={width < DisplaySizes.minWidth ? stylesOrderCartRow.colImageMin : stylesOrderCartRow.colImage}>
        <Image source={item.product.image} style={stylesOrderCartRow.image} resizeMode='cover' />
      </View>
      <View style={width < DisplaySizes.minWidth ? stylesOrderCartRow.colDescriptionMin : stylesOrderCartRow.colDescription}>
        <Text style={width < DisplaySizes.minWidth ? stylesOrderCartRow.textMin : stylesOrderCartRow.text}>
          {item.product.title}
        </Text>
        <Text style={width < DisplaySizes.minWidth ? stylesOrderCartRow.textPriceMin : stylesOrderCartRow.textPrice}>
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
    fontSize: 20,
    fontFamily: 'PlayFairBold'
  },
  textMin: {
    color: Colors.grayDark,
    fontSize: 16,
    fontFamily: 'PlayFairBold'
  },
  textPrice: {
    color: Colors.grayDark,
    fontSize: 20,
    fontFamily: 'PlayFairBold'
  },
  textPriceMin: {
    color: Colors.grayDark,
    fontSize: 16,
    fontFamily: 'PlayFairBold'
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