import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainerStyles.css'
import Spinner from '../commons/Spinner/Spinner';


function ItemDetailContainer() {

  const { itemId } = useParams();
  console.log(itemId)
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const db = getFirestore();
        const docRef = doc(db, 'products', itemId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProductDetail(docSnap.data());
        } else {
          console.log('error fetching document')
        }
      } catch(error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [itemId])


    if (isLoading) {
      return <Spinner isLoading={isLoading} />;
    }
  
  return (
        <div className='containerDetail'>
      {productDetail && <ItemDetail {...productDetail}/>}
        </div>   
  )
}

export default ItemDetailContainer