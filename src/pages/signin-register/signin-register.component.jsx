import React from 'react';
import SignIn from '../../components/signin/signin.component';
import Register from '../../components/register/register.component';

import './signin-register.styles.scss';


const SignInRegister = () => {
    return(
        <div className='signin-register'>
            <SignIn />
            <Register />
        </div>
    )
}

export default SignInRegister;