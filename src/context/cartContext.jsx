import { createContext, useState, useContext } from 'react'

const CartContext = createContext ([]);


export const CartProvider = ({children}) => {
    const [itemsCart, setItemsCart] = useState([]) 

    const addItems = (item) => {
        //chequear si el item ya fue agregado
        const existingItem = itemsCart.find((cartItem) => cartItem.name === item.name)

        if (existingItem) {
            const updatedItems = itemsCart.map((cartItem) => {
                if (cartItem.name === item.name) {
                    return {...cartItem, quantity: cartItem.quantity + item.quantity}
                }
                return cartItem;
            });
            setItemsCart(updatedItems);
        } else {
            setItemsCart([...itemsCart, item])
        }

    }

    const removeItem = (itemToErase) => {
        const cartUpdated = itemsCart.filter(item => item.name !== itemToErase.name);
        setItemsCart(cartUpdated);
    }

    const removeOne = (itemToRemove) => {
        const updatedItems = itemsCart.map((item) => {
            if (item.name === itemToRemove.name) {
                if (item.quantity > 1) {
                    return {...item, quantity: item.quantity - 1};
                } else {
                    return null;
                }
            }
            return item;
        });
    
        const cartUpdated = updatedItems.filter(item => item !== null);
    
        setItemsCart(cartUpdated);
    }

    const clearCart = () => {
        setItemsCart([])
    }

    const total = itemsCart.reduce((ac, item) => ac + item.price * item.quantity, 0)


    return (
        <CartContext.Provider value={{ itemsCart, addItems, removeItem, removeOne, clearCart, total }} >
                {children}
        </CartContext.Provider>
    )  
};

export const useCart = () => useContext(CartContext);

export default CartContext