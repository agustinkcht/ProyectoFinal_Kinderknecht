import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import './cartWidget.css'
import CartContext from '../../context/cartContext';
import { useContext } from 'react';
import { sumQuantities } from '../../utils/sumQuantitiesCart';
import { Link } from 'react-router-dom';

function CartWidget({ number, showIsModal}) {

  const {itemsCart} = useContext(CartContext)


  return (
    <div className='containerCart'>
      <Link to="/cart" className='cartLink'>
      <ShoppingCartIcon className='cartIcon'/>
      </Link>
      <span className='cartNumber'>{sumQuantities(itemsCart)}</span>
    </div>
  )
}

export default CartWidget



