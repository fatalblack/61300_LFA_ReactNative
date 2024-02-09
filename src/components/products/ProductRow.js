import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';
import iconAdd from '../../../assets/icon-add.png';
import iconDetail from '../../../assets/icon-detail.png';

function ProductRow({navigation, item}) {
  const { height, width } = useWindowDimensions();

  const onAddProduct = () => {
    console.log(item.id);
  };

  const onViewDetail = () => {
    navigation.navigate("ProductDetail", { item: item });
  };

  return(
    <View style={stylesProductRow.container}>
      <View style={width < DisplaySizes.minWidth ? stylesProductRow.colImageMin : stylesProductRow.colImage}>
        <Image source={item.image} style={stylesProductRow.image} resizeMode='cover' />
      </View>
      <View style={width < DisplaySizes.minWidth ? stylesProductRow.colDescriptionMin : stylesProductRow.colDescription}>
        <Text style={width < DisplaySizes.minWidth ? stylesProductRow.textMin : stylesProductRow.text}>
          {item.title}
        </Text>
        <Text style={width < DisplaySizes.minWidth ? stylesProductRow.textPriceMin : stylesProductRow.textPrice}>
          ${item.price}
        </Text>
      </View>
      <View style={stylesProductRow.colActions}>
        <Pressable onPress={onViewDetail}>
          <Image source={iconDetail} style={width < DisplaySizes.minWidth ? stylesProductRow.iconMin : stylesProductRow.icon} />
        </Pressable>
        <Pressable onPress={onAddProduct}>
          <Image source={iconAdd} style={width < DisplaySizes.minWidth ? stylesProductRow.iconMin : stylesProductRow.icon} />
        </Pressable>
      </View>
    </View>
  );
}

const stylesProductRow = StyleSheet.create({
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
    width: '55%',
    paddingHorizontal: 4
  },
  colDescriptionMin: {
    width: '60%',
    paddingHorizontal: 4
  },
  colActions: {
    width: '20%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
  },
  iconMin: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  image: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    borderRadius: 5
  }
});

export default ProductRow;