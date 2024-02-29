import React from 'react'
import './itemListContainer.css'
import ItemList from '../ItemList/ItemList.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Spinner from '../commons/Spinner/Spinner.jsx';



const ItemListContainer = ({ greeting }) => {

    const {categoryId} = useParams()

    const [items, setItems] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const db = getFirestore();
                const itemsCollection = collection(db, 'products');
                let querySnapshot;

                if (categoryId) {
                    const q = query(itemsCollection, where('category', '==', categoryId));
                    querySnapshot = await getDocs(q);
                } else {
                    querySnapshot = await getDocs(itemsCollection);
                }

                const docs = querySnapshot.docs.map(doc => doc.data());
                setItems(docs);
                setIsLoading(false);
            } catch (err) {
                console.error('error fetching data', err)
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);


    if(isLoading) return <Spinner isLoading={isLoading}/>

    return(
        <div className='container'>
            <h1 className='title'>{greeting}</h1>
            <ItemList items={items}/>
        </div>

    )

}

export default ItemListContainer