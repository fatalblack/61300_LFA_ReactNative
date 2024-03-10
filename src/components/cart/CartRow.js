import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import { setProductModalVisible, setProductModalCurrentId } from '../../features/shop/shopSlice';
import CartDeleteModal from './CartDeleteModal';
import iconDelete from '../../../assets/icon-delete.png';

function CartRow({item}) {
  const dispatch = useDispatch();
  const isUnderMinWidth = IsUnderMinWidth();

  const onOpenDeleteModal = () => {
    dispatch(setProductModalCurrentId(item.id));
    dispatch(setProductModalVisible(true));
  };

  return(
    <View style={stylesCartRow.container}>
      <View style={isUnderMinWidth ? stylesCartRow.colImageMin : stylesCartRow.colImage}>
        <Image source={{ uri: item.product.image }} style={stylesCartRow.image} resizeMode='cover' />
      </View>
      <View style={isUnderMinWidth ? stylesCartRow.colDescriptionMin : stylesCartRow.colDescription}>
        <Text style={[stylesCartRow.text, isUnderMinWidth ? stylesCartRow.textMin : stylesCartRow.textMax]}>
          {item.product.title}
        </Text>
        <Text style={[stylesCartRow.text, isUnderMinWidth ? stylesCartRow.textMin : stylesCartRow.textMax]}>
          ${item.subTotal} (${item.product.price} x {item.quantity})
        </Text>
      </View>
      <View style={stylesCartRow.colActions}>
        <Pressable onPress={onOpenDeleteModal}>
          <Image source={iconDelete} style={isUnderMinWidth ? stylesCartRow.iconMin : stylesCartRow.icon} />
        </Pressable>
      </View>
      <CartDeleteModal item={item} />
    </View>
  );
}

const stylesCartRow = StyleSheet.create({
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

export default CartRow;