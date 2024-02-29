import './itemCountStyles.css'
import { useCount } from '../../hooks/useCount'
import Button from '../commons/Button/Button';

function Counter({ onAdd }) {

  const {increase, decrease, clear, valor} = useCount(0, 0, 70);

  return (
    <div className='counter'>
      <div className='cant-val'>
        <p>{valor}</p>
      </div>
      <div className='btns-interact'>
        <button onClick = {decrease} className='decrease'>-</button>
        <button onClick = {clear}>Clear</button>
        <button onClick = {increase} className='increase'>+</button>
      </div>
        <Button className='btn-add' handleClick={()=>onAdd(valor)}>Agregar Al Carrito</Button>
      </div>
  )
}

export default Counter