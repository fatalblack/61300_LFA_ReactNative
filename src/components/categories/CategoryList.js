import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryRow from './CategoryRow';
import iconFood from '../../../assets/icon-food.png';
import iconLibrary from '../../../assets/icon-library.png';
import iconAccessories from '../../../assets/icon-accessories.png';
import iconOthers from '../../../assets/icon-others.png';
import { Colors } from '../../globals/styles/Colors';

function CategoryList({callbackSelectCategory, visibleList}) {
  const [list, setList] = useState(
      [
          { id: 1, title:'Alimentos', icon: iconFood },
          { id: 2, title:'Librería', icon: iconLibrary },
          { id: 3, title:'Accesorios', icon: iconAccessories },
          { id: 4, title:'Otros', icon: iconOthers }
      ]);

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