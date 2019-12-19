import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle } from '../../firebase/firebase';



class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = (event) => {
        event.preventDefault();

        const {value, name} = event.target
        this.setState({[name]: value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        }catch (error){
            console.error(error);
        }        
    }

    render(){
        return(
            <div style={{width: '30vw'}} >
                <h2>I have already an Account</h2>
                <span>Sign in with E-mail and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' value={this.state.email} handleChange={this.handleChange} name='email' label='email' required/>
                    <FormInput type='password' value={this.state.password} handleChange={this.handleChange} name='password' label='password' required/>

                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignedIn>Sign in with Google</CustomButton>
                </form>
                
            </div>
        )
    }
}

export default SignIn;