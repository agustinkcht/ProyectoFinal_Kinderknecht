import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <> 
      <NavBar />
      <Routes>
        <Route exact path='/'
          element={
            <ItemListContainer greeting={'Home'}/>
          } 
        />
        <Route
          path='/category/:categoryId'
          element = {
            <ItemListContainer/>
          }
        
        />
        <Route exact path='/item/:itemId'element={
            <ItemDetailContainer />
          }         
        />
        <Route exact path='/cart'
            element = { <Cart />}        
        />
        <Route exact path='/checkout' 
            element = { <CheckoutForm /> }
        />


        <Route path='*' element={<div>ERROR 404</div>}></Route>
      </Routes>    
    </>
  );
}

export default App;

