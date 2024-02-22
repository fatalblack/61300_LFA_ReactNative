import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { DisplaySizes } from '../../globals/styles/DisplaySizes';
import OrderList from './OrderList';

function Order({navigation}){
  const list = useSelector(state => state.shopReducer.value.orders);

  const { height, width } = useWindowDimensions();
  const [total, setTotal] = useState(0);
  const [ isLandscape, setIsLandscape ] = useState(false);

  useEffect(()=>{
    if(width > height){
      setIsLandscape(true);
    }else{
      setIsLandscape(false);
    }
  }, [height, width]);
  
  useEffect(() => {
    setTotal(list.length);
  },[list]);

  return(
    <View style={isLandscape ? stylesOrder.containerLandscape : stylesOrder.container}>
      <OrderList list={list} navigation={navigation}></OrderList>
      <View>
        <Text style={stylesOrder.total}>{total} compras</Text>
      </View>
    </View>
  );
}

const stylesOrder = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'top',
    paddingBottom: DisplaySizes.paddingBottomNavigator
  },
  containerLandscape: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'top',
    paddingBottom: DisplaySizes.paddingBottomNavigatorLandscape
  },
  total: {
    paddingRight: 5,
    fontSize: 18,
    fontFamily: 'JosefinBold',
    textAlign: 'right'
  }
});

export default Order;