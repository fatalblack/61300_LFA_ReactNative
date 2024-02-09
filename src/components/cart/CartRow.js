import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';
import CartDeleteModal from './CartDeleteModal';
import iconDelete from '../../../assets/icon-delete.png';

function CartRow({item, callbackDeleteItem}) {
  const [modalVisible, setModalVisible] = useState(false);
  const { height, width } = useWindowDimensions();

  const onOpenDeleteModal = () => {
    setModalVisible(true);
  };

  const onDeleteAndCloseModal = () => {
    callbackDeleteItem(item.id);
    setModalVisible(false);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  return(
    <View style={stylesCartRow.container}>
      <View style={stylesCartRow.col1}>
        <Text style={width < DisplaySizes.minWidth ? stylesCartRow.textMin : stylesCartRow.text}>
          {item.title}
        </Text>
      </View>
      <View style={stylesCartRow.col2}>
        <Pressable onPress={onOpenDeleteModal}>
          <Image source={iconDelete} style={width < DisplaySizes.minWidth ? stylesCartRow.iconMin : stylesCartRow.icon} />
        </Pressable>
      </View>
      <CartDeleteModal
        itemTitle={item.title}
        visible={modalVisible}
        callbackDelete={onDeleteAndCloseModal}
        callbackCancel={onCloseModal} />
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
    fontSize: 20,
    fontFamily: 'PlayFairBold'
  },
  textMin: {
    color: Colors.grayDark,
    fontSize: 16,
    fontFamily: 'PlayFairBold'
  },
  col1: {
    width: '80%'
  },
  col2: {
    width: '20%',
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
});

export default CartRow;