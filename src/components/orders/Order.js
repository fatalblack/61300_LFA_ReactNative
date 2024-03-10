import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { DisplaySizes, IsLandscape } from '../../globals/styles/DisplaySizes';
import { useGetOrdersQuery } from '../../services/shopService';
import OrderList from './OrderList';

function Order({navigation}){
  const localId = useSelector(state => state.authReducer.value.localId);
  const { data: orders, isLoading, error } = useGetOrdersQuery(localId);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  
  const isLandscape = IsLandscape();
  
  useEffect(() => {
    if(!isLoading && orders){
      let ordersArray = Object.values(orders);
      setList(ordersArray);
      setTotal(ordersArray.length);
    }else if(list === null){
      setTotal(0);
    }
  },[orders]);

  return(
    list ?
    <View style={[stylesOrder.container, isLandscape ? stylesOrder.containerLandscape : stylesOrder.containerPortrait]}>
      <OrderList list={list} navigation={navigation}></OrderList>
      <View>
        <Text style={stylesOrder.total}>{total} compras</Text>
      </View>
    </View> :
    <Text style={stylesOrder.emptyLabel}>No realizó ninguna compra aún.</Text>
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
    paddingBottom: DisplaySizes.paddingBottomNavigatorLandscape
  },
  containerPortrait: {
    paddingBottom: DisplaySizes.paddingBottomNavigator
  },
  total: {
    paddingRight: 5,
    fontSize: 18,
    fontFamily: 'JosefinBold',
    textAlign: 'right'
  },
  emptyLabel: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 16,
    fontStyle: 'italic'
  }
});

export default Order;