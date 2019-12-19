import React from 'react';

import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartIcon = ({toggleCartHidden}) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <i className="fas fa-shopping-cart shopping-icon"></i>
            <span className='item-count ml-2 mb-1'> 0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);