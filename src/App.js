import React from 'react';
import { hot } from 'react-hot-loader';

import logo from './assets/images/logo.png';
import './App.css';

const App = () => (
  <div>
    <img src={logo} alt="logo" />
    <h1>Webpack + React!!!</h1>
  </div>
);

export default hot(module)(App);
