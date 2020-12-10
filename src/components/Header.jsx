import React from 'react';
import '../styles/components/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return ( 
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Conf</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout"><i class="fas fa-shopping-basket fa-2x"></i></Link>
      </div>
    </div>
  );
}
 
export default Header;