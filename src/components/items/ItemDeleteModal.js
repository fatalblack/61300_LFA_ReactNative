import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

function ItemDeleteModal({itemTitle, visible, callbackDelete, callbackCancel}) {
  const onDelete = () => {
    callbackDelete();
  }

  const onCancel = () => {
    callbackCancel();
  }

  return(
    <Modal
      visible={visible}
      style={stylesItemRow.modal}
      transparent={true}
    >
      <View style={stylesItemRow.modalBody}>
        <View>
          <Text style={stylesItemRow.modalDetail}>
            ¿Desea eliminar el producto '{itemTitle}'?
          </Text>
        </View>
        <View style={stylesItemRow.modalActions}>
          <Pressable onPress={onDelete} style={stylesItemRow.modalDeleteButton}>
            <Text style={stylesItemRow.modalDeleteButtonText}>Eliminar</Text>
          </Pressable>
          <Pressable onPress={onCancel} style={stylesItemRow.modalCancelButton}>
            <Text style={stylesItemRow.modalCancelButtonText}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const stylesItemRow = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  modalBody: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalDetail: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    textAlign: 'center',
    fontSize: 20
  },
  modalActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDeleteButton: {
    height: 35,
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#f08080',
  },
  modalDeleteButtonText: {
    fontWeight: '600',
    fontSize: 18,
  },
  modalCancelButton: {
    height: 35,
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#bbb',
  },
  modalCancelButtonText: {
    fontWeight: '600',
    fontSize: 18,
  },
});

export default ItemDeleteModal;