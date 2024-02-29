import './cartStyles.css'
import { useCart } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom' 

const Cart = () => {
    const { itemsCart, clearCart, total } = useCart();

    if (itemsCart.length === 0) {
        return (
            <div className='no-items'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='option'> Seleccionar Productos </Link>
            </div>
        );
    }

return (
    <div className='cartCard'>
        <h1>En el carrito:</h1>
        {itemsCart.map((item) => (
            <CartItem className='cartItem' key={item.id} item={item}/>
        ))}
        <h3> Total: ${total} </h3>
        <button onClick={clearCart} className='Button'> Limpiar Carrito </button>
        <Link to='/checkout' className='option'> Checkout </Link>
    </div>
)
}

export default Cart