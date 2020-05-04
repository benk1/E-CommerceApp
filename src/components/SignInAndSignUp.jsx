import React from 'react';
import './styles/signInAndSignUp.styles.scss';

import SignIn from './SignIn';
import SignUp from './SignUp';

const SignInAndSignUpPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInAndSignUpPage;
