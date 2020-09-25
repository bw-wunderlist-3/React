import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute'
import {ProtectedPage} from './components/protectedPage'
import RegisterForm from './components/RegisterForm'
import NavBar from './components/NavBar'
import {TodoList}  from './components/TodoList'

function App() {
  return (
    <>
    <Router>
    <div className="App">
    <NavBar />
    <Route exact path='/' component={LoginForm} />
    <Route exact path='/login' component={LoginForm} />
    <PrivateRoute exact path='/protected' component={ProtectedPage} />
    <Route path='/register' component={RegisterForm} />
    </div>
    </Router> 
    <div>
      <TodoList />
    </div>
    </>
    );
}

export default App;
