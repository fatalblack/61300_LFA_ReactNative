import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors } from '../../globals/styles/Colors';
import { CategoryData } from '../../globals/data/CategoryData';
import CategoryRow from './CategoryRow';

function CategoryList({callbackSelectCategory, visibleList}) {
  const [list, setList] = useState(CategoryData);

  return(
    <View style={stylesCategoryList.container}>
      { list.length > 0 ?
        <FlatList 
          data={list}
          renderItem={({item}) => <CategoryRow item={item} callbackSelectCategory={callbackSelectCategory} />}
          keyExtractor={item => item.id}
        /> :
        <Text style={stylesCategoryList.emptyLabel}>No hay categorías disponibles</Text>
      }
    </View>
  );
}

const stylesCategoryList = StyleSheet.create({
  container: {
    height: 160,
    padding: 5,
    marginBottom: 10,
    borderTopColor: Colors.white,
    borderTopWidth: 1,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    backgroundColor: Colors.blueMain
  },
  emptyLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic'
  }
});

export default CategoryList;