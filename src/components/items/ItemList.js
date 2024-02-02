import { StyleSheet, Text, View, FlatList } from 'react-native';
import ItemRow from './ItemRow';
import { Colors } from '../../globals/styles/Colors';

function ItemList({list, callbackDeleteItem}) {
  return(
    <View style={stylesItemList.container}>
      { list.length > 0 ?
        <FlatList
          data={list}
          renderItem={({item}) => <ItemRow item={item} callbackDeleteItem={callbackDeleteItem} />}
          keyExtractor={item => item.id}
        /> :
        <Text style={stylesItemList.emptyLabel}>Agregue productos</Text>
      }
    </View>
  );
}

const stylesItemList = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'top',
    padding: 5,
    borderTopColor: Colors.grayLight,
    borderTopWidth: 1,
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1,
  },
  emptyLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic'
  }
});

export default ItemList;