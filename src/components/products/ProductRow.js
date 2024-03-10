import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import { setProductIdSelected, addCartItem } from '../../features/shop/shopSlice';
import iconAdd from '../../../assets/icon-add.png';
import iconDetail from '../../../assets/icon-detail.png';

function ProductRow({navigation, item}) {
  const dispatch = useDispatch();
  const isUnderMinWidth = IsUnderMinWidth();

  const onAddProduct = () => {
    dispatch(addCartItem({product: item, quantity: 1}));
  };

  const onViewDetail = () => {
    dispatch(setProductIdSelected(item.id));
    navigation.navigate("ProductDetail");
  };

  return(
    <View style={stylesProductRow.container}>
      <View style={isUnderMinWidth ? stylesProductRow.colImageMin : stylesProductRow.colImage}>
        <Image source={{ uri: item.image }} style={stylesProductRow.image} resizeMode='cover' />
      </View>
      <View style={isUnderMinWidth ? stylesProductRow.colDescriptionMin : stylesProductRow.colDescription}>
        <Text style={[stylesProductRow.text, isUnderMinWidth ? stylesProductRow.textMin : stylesProductRow.textMax]}>
          {item.title}
        </Text>
        <Text style={[stylesProductRow.text, isUnderMinWidth ? stylesProductRow.textMin : stylesProductRow.textMax]}>
          ${item.price}
        </Text>
      </View>
      <View style={stylesProductRow.colActions}>
        <Pressable onPress={onViewDetail}>
          <Image source={iconDetail} style={isUnderMinWidth ? stylesProductRow.iconMin : stylesProductRow.icon} />
        </Pressable>
        <Pressable onPress={onAddProduct}>
          <Image source={iconAdd} style={isUnderMinWidth ? stylesProductRow.iconMin : stylesProductRow.icon} />
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