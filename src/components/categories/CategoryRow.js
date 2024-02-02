import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Colors } from '../../globals/styles/Colors';

function CategoryRow({item, callbackSelectCategory}) {
  const onSelectCategory = () => {
    callbackSelectCategory(item.id);
  };

  return(
    <Pressable onPress={onSelectCategory}>
      <View style={stylesCategoryRow.container}>
        <View style={stylesCategoryRow.col1}>
          <Image source={item.icon} style={stylesCategoryRow.icon} />
        </View>
        <View style={stylesCategoryRow.col2}>
          <Text style={stylesCategoryRow.text}>
            {item.title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const stylesCategoryRow = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0,
    marginVertical: 3,
    padding: 4,
    borderColor: Colors.white,
    borderBottomColor: Colors.grayLight
  },
  text: {
    color: Colors.grayDark,
    fontSize: 18,
    fontWeight: '600'
  },
  col1: {
    width: '20%'
  },
  col2: {
    width: '80%',
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-start',
  },
});

export default CategoryRow;