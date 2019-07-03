import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import store from './store'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'

axios.get('/navs.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </Provider>
  </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();