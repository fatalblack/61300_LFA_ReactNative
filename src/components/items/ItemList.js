import { StyleSheet, Text, View, FlatList } from 'react-native';
import ItemRow from './ItemRow';

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
    borderTopColor: '#bbb',
    borderTopWidth: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  item: {
    marginTop: 2,
    marginBottom: 2,
    padding: 2,
    color: '#333',
    backgroundColor: '#fcd1c9',
    fontSize: 18,
    fontWeight: '600'
  },
  emptyLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic'
  }
});

export default ItemList;