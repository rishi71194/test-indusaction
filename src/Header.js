import React from 'react';
import './Header.css';
import Logout_LOGO from './Logout_Logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className="header__logo">
                <p>LOGO</p>
            </div>
            <div className = 'header__nav'>
                <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                    <div className='header__option'>Home</div>
                </Link>
                <Link to="/state" style={{ color: 'black', textDecoration: 'none' }}>
                    <div className='header__option'>State</div>
                </Link>
                <Link to="/district" style={{ color: 'black', textDecoration: 'none' }}>
                    <div className='header__option'>District</div>
                </Link>
                <Link to="/child" style={{ color: 'black', textDecoration: 'none' }}>
                    <div className='header__option'>Child</div>
                </Link>
                
            </div>
            <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>
                <div className='header__logout'>
                    <img src={Logout_LOGO} alt='logout_img'></img>
                    <p>Logout</p>
                </div>
            </Link>
            
        </div>
    )
}

export default Header;
