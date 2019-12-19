import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ( {name, price, imageUrl}) => {
    return(
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>
                <CustomButton inverted>Add to Basket</CustomButton>
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}$</span>
            </div>
        </div>
    )
}

export default CollectionItem;