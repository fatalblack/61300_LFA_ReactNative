import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import { useGetCategoriesQuery } from '../../services/shopService';
import CategoryRow from './CategoryRow';

function CategoryList({navigation}) {
  const { data: list, isLoading, error } = useGetCategoriesQuery();
  const isUnderMinWidth = IsUnderMinWidth();

  return(
    <View style={[stylesCategoryList.container, isUnderMinWidth ? stylesCategoryList.containerMin : stylesCategoryList.containerMax]}>
      { list && list.length > 0 ?
        <FlatList 
          data={list}
          renderItem={({item}) => <CategoryRow
            item={item}
            navigation={navigation} />}
          keyExtractor={item => item.id}
        /> :
        <Text style={stylesCategoryList.emptyLabel}>No hay categorías disponibles</Text>
      }
    </View>
  );
}

const stylesCategoryList = StyleSheet.create({
  container: {
    borderTopColor: Colors.white,
    borderTopWidth: 1,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    backgroundColor: Colors.blueMain
  },
  containerMin: {
    height: 140,
    padding: 3,
    marginBottom: 7,
  },
  containerMax: {
    height: 160,
    padding: 5,
    marginBottom: 10,
  },
  emptyLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic'
  }
});

export default CategoryList;