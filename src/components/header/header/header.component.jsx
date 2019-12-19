import React from 'react';
import './header.styles.scss';
import Navbar from '../navbar/navbar.component';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <h1>VSPRIT</h1>  
            <Navbar currentUser={currentUser}/> 
        </div>
    )
}


export default Header;