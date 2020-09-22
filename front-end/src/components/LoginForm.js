import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const LoginForm = () => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const history = useHistory()

  const handleChanges = e => {
    e.persist()
    setCredentials({
      ...credentials,
     [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      history.push('/protected')
    })
    .catch(err => {
      console.log('Login form error catch: ', err)
    })
  }

  const { register, errors } = useForm();
  
  
  return (
    <div className='form-contiainer'>
        <form onSubmit={login}>
            <label htmlFor='username'>Username:</label>
            <br></br>
            <input type="text" placeholder="Username" name="username" value={credentials.username} ref={register({required: true, min: 5})} />
            <br></br>
            {errors.username && 'Username must be longer than 5 characters'}


            <br></br>
            <label htmlFor='password'>Password:</label>
            <br></br>
            <input type="password" placeholder="Password" name="password" value={credentials.password} ref={register({required: true, min: 5})} />
            <br></br>
            {errors.password && 'Password must be longer than 5 characters'}
            
            <input type="submit" />
            <div>
                <p>Don't have an account? Sign up Here </p>
            </div>
        </form>
    </div>
  );
}

export default LoginForm