import { NavLink } from 'react-router';
import Cart from './Cart';
import './header.css'
function Header() {
  return (
    <header className="header">
  <div className="logo">MyShop</div>

  <nav className="nav">
   <NavLink to="/" >Home</NavLink>
    <a href="#">Products</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
<Cart/>
</header>

  );
}
export default Header
