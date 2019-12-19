import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignedIn, inverted, ...otherProps}) => {
    return(
        <div>
            <button className={`
                    ${isGoogleSignedIn ? 'isGoogleSignedIn' : '' } 
                    ${inverted ? 'inverted' : '' }
                    custom-button 
                `} 
                {...otherProps}>
                {children}
            </button>
        </div>
    )
}

export default CustomButton;