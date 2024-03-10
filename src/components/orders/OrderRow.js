import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';
import { setOrderCartSelected } from '../../features/shop/shopSlice';
import iconDetail from '../../../assets/icon-detail.png';

function OrderRow({item, navigation}) {
  const dispatch = useDispatch();
  
  const isUnderMinWidth = IsUnderMinWidth();
  
  const onViewDetail = () => {
    dispatch(setOrderCartSelected(item));
    navigation.navigate("OrderDetail");
  };

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  }

  const formatDate = (dateString) => {
    let date = new Date(dateString);
    
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  };

  return(
    <View style={stylesOrderRow.container}>
      <View style={stylesOrderRow.colDescription}>
        <Text style={[stylesOrderRow.text, isUnderMinWidth ? stylesOrderRow.textMin : stylesOrderRow.textMax]}>
          {formatDate(item.date)}
        </Text>
        <Text style={[stylesOrderRow.text, isUnderMinWidth ? stylesOrderRow.textMin : stylesOrderRow.textMax]}>
          ${item.total}
        </Text>
      </View>
      <View style={stylesOrderRow.colActions}>
        <Pressable onPress={onViewDetail}>
          <Image source={iconDetail} style={isUnderMinWidth ? stylesOrderRow.iconMin : stylesOrderRow.icon} />
        </Pressable>
      </View>
    </View>
  );
}

const stylesOrderRow = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0,
    marginVertical: 2,
    padding: 4,
    backgroundColor: Colors.pinkAlter,
    borderRadius: 5
  },
  text: {
    color: Colors.grayDark,
    fontFamily: 'PlayFairBold'
  },
  textMin: {
    fontSize: 16,
  },
  textMax: {
    fontSize: 20,
  },
  colDescription: {
    width: '80%',
    paddingHorizontal: 4
  },
  colActions: {
    width: '20%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
  },
  iconMin: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  image: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    borderRadius: 5
  }
});

export default OrderRow;