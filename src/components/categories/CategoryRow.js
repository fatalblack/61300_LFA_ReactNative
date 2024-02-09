import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';

function CategoryRow({navigation, item, callbackHideMenu}) {
  const { height, width } = useWindowDimensions();
  
  const onSelectCategory = () => {
    callbackHideMenu();
    navigation.navigate("ProductList", {categoryId: item.id});
  };

  return(
    <Pressable onPress={onSelectCategory}>
      <View style={width < DisplaySizes.minWidth ? stylesCategoryRow.containerMin : stylesCategoryRow.container}>
        <View style={stylesCategoryRow.col1}>
          <Image source={item.icon} style={width < DisplaySizes.minWidth ? stylesCategoryRow.iconMin : stylesCategoryRow.icon} />
        </View>
        <View style={stylesCategoryRow.col2}>
          <Text style={width < DisplaySizes.minWidth ? stylesCategoryRow.textMin : stylesCategoryRow.text}>
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
  containerMin: {
    height: 26,
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
    lineHeight: 24,
    fontSize: 22,
    fontFamily: 'JosefinBold'
  },
  textMin: {
    color: Colors.grayDark,
    lineHeight: 20,
    fontSize: 18,
    fontFamily: 'JosefinBold'
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