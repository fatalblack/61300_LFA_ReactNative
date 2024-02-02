import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { Colors } from '../../globals/styles/Colors';

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
      style={stylesItemDeleteModal.modal}
      transparent={true}
    >
      <View style={stylesItemDeleteModal.modalContainer}>
        <View style={stylesItemDeleteModal.modalBody}>
          <View>
            <Text style={stylesItemDeleteModal.modalDetail}>
              ¿Desea eliminar el producto '{itemTitle}'?
            </Text>
          </View>
          <View style={stylesItemDeleteModal.modalActions}>
            <Pressable onPress={onDelete} style={stylesItemDeleteModal.modalDeleteButton}>
              <Text style={stylesItemDeleteModal.modalDeleteButtonText}>Eliminar</Text>
            </Pressable>
            <Pressable onPress={onCancel} style={stylesItemDeleteModal.modalCancelButton}>
              <Text style={stylesItemDeleteModal.modalCancelButtonText}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const stylesItemDeleteModal = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.black40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBody: {
    margin: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: Colors.black,
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
    backgroundColor: Colors.redAlert,
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
    backgroundColor: Colors.grayLight,
  },
  modalCancelButtonText: {
    fontWeight: '600',
    fontSize: 18,
  },
});

export default ItemDeleteModal;