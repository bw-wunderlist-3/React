import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute'
import {ProtectedPage} from './components/protectedPage'

function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path='/' component={LoginForm} />
    <PrivateRoute exact path='/protected' component={ProtectedPage} />
    </div>
    </Router>
  );
}

export default App;
