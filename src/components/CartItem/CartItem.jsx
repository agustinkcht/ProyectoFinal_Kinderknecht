import React from 'react'
import { useCart } from '../../context/cartContext';
import './cartItem.css'

const CartItem = ({ item }) => {

  const { removeItem, removeOne } = useCart();

  const handleRemoveOne = () => {
    removeOne(item);
  }

  const handleRemove = () => {
    removeItem(item);
  };


  return (
    <div className='cartItems'>

      <div className='detail-left'>
        <button onClick={handleRemove} className='btn-remove-item'>
          X
        </button>
        <p>{item.name}</p>
      </div>

      <div className='detail-center'>
          <p className='c-price'>${item.price}</p>
          <span>x</span>
          <p className='c-quantity'>{item.quantity} unidad(es)</p>
      </div>

      <p>subtotal: ${item.price * item.quantity}</p>

      <div className='detail-right'>
        <button onClick={handleRemoveOne} className='btn-remove-one'>
          -1 u
        </button>
      </div>
    </div>
  );
};

export default CartItem

