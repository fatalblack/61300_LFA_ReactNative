import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import { setCategorySelected, setShowMenu } from '../../features/shop/shopSlice';

function CategoryRow({navigation, item}) {
  const dispatch = useDispatch();
  const isUnderMinWidth = IsUnderMinWidth();
  
  const onSelectCategory = () => {
    dispatch(setShowMenu(false));
    dispatch(setCategorySelected(item));
    navigation.navigate("ProductList");
  };

  return(
    <Pressable onPress={onSelectCategory}>
      <View style={[stylesCategoryRow.container, isUnderMinWidth ? stylesCategoryRow.containerMin : stylesCategoryRow.containerMax]}>
        <View style={stylesCategoryRow.col1}>
          <Image source={{ uri: item.icon }} style={isUnderMinWidth ? stylesCategoryRow.iconMin : stylesCategoryRow.icon} />
        </View>
        <View style={stylesCategoryRow.col2}>
          <Text style={[stylesCategoryRow.text, isUnderMinWidth ? stylesCategoryRow.textMin : stylesCategoryRow.textMax]}>
            {item.title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const stylesCategoryRow = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0,
    marginVertical: 3,
    padding: 4,
    borderColor: Colors.white,
    borderBottomColor: Colors.grayLight
  },
  containerMin: {
    height: 26,
  },
  containerMax: {
    height: 30,
  },
  text: {
    color: Colors.grayDark,
    fontFamily: 'JosefinBold'
  },
  textMin: {
    lineHeight: 20,
    fontSize: 18,
  },
  textMax: {
    lineHeight: 24,
    fontSize: 22,
  },
  col1: {
    width: '15%'
  },
  col2: {
    width: '85%',
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-start',
  },
  iconMin: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
  },
});

export default CategoryRow;