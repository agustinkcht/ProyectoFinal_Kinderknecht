import { useState } from "react"
import { useCart } from '../../context/cartContext'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import './checkoutForm.css'

const Form = () => {

    const {itemsCart} = useCart();
    
    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
    const db = getFirestore()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const ordersCollection = collection(db, "order")
    
    const order = {
        buyer: {
            name,
            email
        },
    
        items: itemsCart
        };
            
        addDoc(ordersCollection, order)
        .then(({id}) => {
        setOrderId(id)
        }); 
    } 
    
    return (
        <div className="checkout-form"> 
            <h2>Introduzca sus datos</h2>
    
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit"> Send </button>
            </form>
    
            <h3>ID de Orden: {orderId}</h3> 
        </div>
    )
};

export default Form