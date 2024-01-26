import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';
import { useState } from 'react';
import ItemDeleteModal from './ItemDeleteModal';
import iconDelete from '../../../assets/icon-delete.png';

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
    backgroundColor: '#fcd1c9',
  },
  text: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600'
  },
  col1: {
    width: '80%'
  },
  col2: {
    width: '20%',
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
});

export default ItemRow;