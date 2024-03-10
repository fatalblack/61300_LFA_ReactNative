import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes, IsUnderMinWidth, IsLandscape } from '../../globals/styles/DisplaySizes';
import OrderCartRow from './OrderCartRow';

function OrderDetail({navigation}) {
  const item = useSelector(state => state.shopReducer.value.orderCartSelected);
  
  const isUnderMinWidth = IsUnderMinWidth();
  const isLandscape = IsLandscape();

  const onBackToList = () => {
    navigation.navigate("Order");
  };

  return(
    <View style={[stylesOrderDetail.container, isLandscape ? stylesOrderDetail.containerLandscape : stylesOrderDetail.containerPortrait]}>
      <View style={stylesOrderDetail.zoneBack}>
        <Pressable
          onPress={onBackToList}
          style={[stylesOrderDetail.buttonBack, isUnderMinWidth ? stylesOrderDetail.buttonBackMin : stylesOrderDetail.buttonBackMax]}>
          <Text style={[stylesOrderDetail.textBack, isUnderMinWidth ? stylesOrderDetail.textBackMin : stylesOrderDetail.textBackMax]}>
            Volver a la lista
          </Text>
        </Pressable>
      </View>
      <View style={stylesOrderDetail.listContainer}>
        <FlatList
          data={item.buyCartList}
          renderItem={({item}) => <OrderCartRow item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <Text style={stylesOrderDetail.total}>Total ${item.total}</Text>
      </View>
    </View>
  );
}

const stylesOrderDetail = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'top',
    flex: 1,
  },
  containerLandscape: {
    paddingBottom: DisplaySizes.paddingBottomNavigatorLandscape,
  },
  containerPortrait: {
    paddingBottom: DisplaySizes.paddingBottomNavigator,
  },
  listContainer: {
    flex: 1,
    padding: 5,
    borderTopColor: Colors.grayLight,
    borderTopWidth: 1,
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1
  },
  zoneBack:{
    width: '100%'
  },
  buttonBack: {
    width: '100%',
    backgroundColor: Colors.pinkAlter
  },
  buttonBackMin: {
    height: 36,
  },
  buttonBackMax: {
    height: 40,
  },
  textBack: {
    color: Colors.grayDark,
    fontFamily: 'JosefinBold',
    textAlign: 'center'
  },
  textBackMin: {
    lineHeight: 36,
    fontSize: 18,
  },
  textBackMax: {
    width: '100%',
    lineHeight: 40,
    fontSize: 22,
  },
  total: {
    paddingRight: 5,
    fontSize: 18,
    fontFamily: 'JosefinBold',
    textAlign: 'right'
  }
});

export default OrderDetail;