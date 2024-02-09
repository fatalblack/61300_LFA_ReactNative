import { useState } from 'react';
import CartForm from './CartForm';
import CartList from './CartList';

function Cart({navigation}){
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const callbackAddItem = (itemTitle) => {
    setList(old => [...old, {id: currentIndex, title: itemTitle}]);
    setCurrentIndex(currentIndex + 1);
  };
  const callbackDeleteItem = (itemId) => {
    setList(old => old.filter((item) => item.id !== itemId));
  };

  return(
    <>
      <CartForm callbackAddItem={callbackAddItem}></CartForm>
      <CartList list={list} callbackDeleteItem={callbackDeleteItem}></CartList>
    </>
  );
}

export default Cart;