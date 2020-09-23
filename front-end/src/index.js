import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './utils/reducer'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const logger = ({getState}) => next => action => {
  console.log('Dispatching this type of action:', action)
  next(action)
}

let store = createStore(reducer, applyMiddleware(logger, thunk))



ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
    <App />
    </Router>
   </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
