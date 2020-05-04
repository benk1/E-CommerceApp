import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage';

import Header from './components/Header';
import SignInAndSignUpPage from './components/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }
      this.setState({
        currentUser: userAuth
      });
      //console.log('my user', user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />{' '}
          <Route path='/shop' component={ShopPage} />{' '}
          <Route path='/signin' component={SignInAndSignUpPage} />{' '}
        </Switch>{' '}
      </div>
    );
  }
}

export default App;
