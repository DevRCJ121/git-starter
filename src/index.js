import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import CountReducer from './reducers/CountReducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk' 


const store = createStore(
  CountReducer,
  applyMiddleware(
    thunkMiddleware
  ));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
