import { StyleSheet, Text, View } from 'react-native';

function ItemList({list}) {
  return(
    <View style={stylesItemList.container}>
      { list.length > 0 ?
        list.map((item, index) =>
          <Text key={'item-'+index} style={stylesItemList.item}>
            {item}
          </Text>) :
        <Text>Agregue productos</Text>
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
});

export default ItemList;