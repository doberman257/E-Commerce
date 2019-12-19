import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfileDoc } from '../../firebase/firebase';


class Register extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert('passwords dont match!');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDoc(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword:''
            });
                
            
        }catch (error){
            console.error(error);
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }


    render(){
        return(
            <div>
                <h2>I dont have an Account</h2>
                <span>Register with E-mail and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput 
                    type='text' 
                    value={this.state.displayName} 
                    handleChange={this.handleChange} 
                    name='displayName' 
                    label='Display Name' 
                    required
                />
                <FormInput 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    name='email' 
                    label='Email' 
                    required
                />
                <FormInput 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    name='password' 
                    label='Password' 
                    required
                /><FormInput 
                    type='password' 
                    value={this.state.confirmPassword} 
                    handleChange={this.handleChange} 
                    name='confirmPassword' 
                    label='Confirm Password' 
                    required
                />
                <CustomButton type='submit'>Register</CustomButton>
                </form>
            </div>
        )
    }
}


export default Register;
