import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState } from 'react';
import ItemDeleteModal from './ItemDeleteModal';
import iconDelete from '../../../assets/icon-delete.png';
import { Colors } from '../../globals/styles/Colors';

function ItemRow({item, callbackDeleteItem}) {
  const [modalVisible, setModalVisible] = useState(false);

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
    <View style={stylesItemRow.container}>
      <View style={stylesItemRow.col1}>
        <Text style={stylesItemRow.text}>
          {item.title}
        </Text>
      </View>
      <View style={stylesItemRow.col2}>
        <Pressable onPress={onOpenDeleteModal}>
          <Image source={iconDelete} style={stylesItemRow.icon} />
        </Pressable>
      </View>
      <ItemDeleteModal
        itemTitle={item.title}
        visible={modalVisible}
        callbackDelete={onDeleteAndCloseModal}
        callbackCancel={onCloseModal} />
    </View>
  );
}

const stylesItemRow = StyleSheet.create({
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
});

export default ItemRow;