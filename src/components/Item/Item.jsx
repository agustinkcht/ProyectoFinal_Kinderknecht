import React from 'react'
import './itemStyles.css'

function Item({ id, name, stock, category, description, price, img }) {
  return (
    <div>
        <div className='item' key={id}>
            <h3 className='name'>{name}</h3>
            <p className='price'>{`$${price}`}</p>
            <p className='stock'>{`Stock: ${stock}`}</p>
            <img src={img} alt="" />
        </div>
      
    </div>
  );
}

export default Item

