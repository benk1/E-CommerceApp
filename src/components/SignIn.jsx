import React, { Component } from 'react';
import './styles/signIn.styles.scss';

import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { signInWithGoogle } from '../firebase/firebase.utils';
class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = e => {
    //const {value,name} = e.target
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
