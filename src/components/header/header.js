import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import Logo from '/Users/mantas/Desktop/Boolean/React/project/src/assets/img/logo.png'
import './header.css'

const Header = () => {
    const location = useLocation();
  return (
    <nav>
      <ul className="header">
        <li className='logo-grid'>
            <img src={Logo} className='logo' alt='logo'/>
            <div className='logo-text-container'>
                <p className='logo-text'>RIMOS PRODUKTAI</p>
                <p className='logo-text'>Šventėms ir jūsų stalui</p>
            </div>
        </li>
        
        <li>
          <Link to="/" className={`Nav-button ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        </li>
        <li>
          <Link to="/about-us" className={`Nav-button ${location.pathname === '/about-us' ? 'active' : ''}`}>About Us</Link>
        </li>
        <li>
          <Link to="/menu" className={`Nav-button ${location.pathname === '/menu' ? 'active' : ''}`}>Menu</Link>
        </li>
        <li>
          <Link to="/our-services" className={`Nav-button ${location.pathname === '/our-services' ? 'active' : ''}`}>Our Services</Link>
        </li>
        <li>
          <Link to="/contacts" className={`Nav-button ${location.pathname === '/contacts' ? 'active' : ''}`}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;