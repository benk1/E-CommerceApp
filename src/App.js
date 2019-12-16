import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
