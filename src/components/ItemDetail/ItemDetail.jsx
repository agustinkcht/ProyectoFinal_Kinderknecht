import './itemDetailStyles.css'
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Button from '../commons/Button/Button';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cartContext';

function ItemDetail({ id, name, stock, category, description, price, img }) {

const {addItems} = useContext(CartContext)

const [productQuantity, setProductQuantity] = useState(0)

const handleOnAdd = (quantity) => {
  setProductQuantity(quantity)
  const item = {
    price,
    name,
    quantity
  };
  addItems(item);
};


  return (
    <div>
        <div className='itemDetail' key={id}>
            <h3 className='iDname'>{name}</h3>
            <p className='iDcategory'>{`Categoría: ${category}`}</p>
            <p className='iDdescription'>{description}</p>
            <p className='iDprice'>{`$${price}`}</p>
            <p className='iDstock'>{`stock: ${stock}`}</p>

            <img src={img} alt="" />
            <div className='iDcounter'>

                { productQuantity > 0 ? <Link to='/cart'>
                <Button>Finalizar Compra</Button></Link> :
                <ItemCount onAdd={handleOnAdd}/>}
                { productQuantity > 0 && <Link to='/'>
                  <Button> Seguir Comprando </Button>
                </Link> }

            </div> 
            
        </div>
    </div>
  );
}


export default ItemDetail