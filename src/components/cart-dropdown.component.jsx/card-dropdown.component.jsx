import React from 'react';

import './card-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CardDropdown = () => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <CustomButton>Check Out</CustomButton>
        </div>
    )
}

export default CardDropdown;