import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'
import {Link, NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navBar'>
      <Link to='/'> 
        <h3>KinderTex</h3>
      </Link>
        <div className='vLine'></div>

        <ul className='categoryList'>
          <li>
            <NavLink to={'/category/confeccion'}>Confeccion</NavLink>
          </li>
          <li>
            <NavLink to={'/category/varios'}>Varios</NavLink>
          </li>
          <li>
            <NavLink to={'/category/tinturas'}>Tinturas</NavLink>
          </li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default NavBar
