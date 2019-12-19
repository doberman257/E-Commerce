import React from 'react';
import './navbar.styles.scss';

import { Link } from 'react-router-dom';
import { auth } from '../../../firebase/firebase';
import { connect } from 'react-redux';
import CartIcon from '../../cart-icon/cart-icon.component';
import CardDropdown from '../../cart-dropdown.component.jsx/card-dropdown.component';

const Navbar = ({currentUser, hidden}) => {
    return(
        <div className='navbar'>
            <Link className='logo-container' to='/'>
                <i className="fas fa-shoe-prints"></i>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='contact'>
                    Contact
                </Link>
                {
                    currentUser?
                    <div className='option' onClick={() => auth.signOut()}>Sing Out</div>
                    : <Link className='option' to='/signin'>
                        Sign in
                    </Link>
                }
                <CartIcon />
            </div> 
            {
                hidden ? null : <CardDropdown />
            }          
        </div>
    )
}


const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Navbar);