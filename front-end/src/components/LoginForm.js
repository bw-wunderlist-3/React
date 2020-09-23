import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory, Link} from 'react-router-dom'
import styled from 'styled-components'


const StyledForm = styled.div`
border: 2px solid black;
width: 30%;

.formInputs{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input{
    margin: 2%;
}
`


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
    .post('/users/login', credentials)
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
    <StyledForm className='form-contiainer' >
        <h1>Sign In To Your Account</h1>
        <form onSubmit={login}>
            <div className="formInputs">
                <label htmlFor='username'>Username:</label>
                <input type="text" placeholder="Username" name="username" value={credentials.username} ref={register({required: true, min: 5})} onChange={handleChanges} />
                {errors.username && 'Username must be longer than 5 characters'}
                {console.log(credentials)}
                

                <label htmlFor='password'>Password:</label>
                <input type="password" placeholder="Password" name="password" value={credentials.password} ref={register({required: true, min: 5})} onChange={handleChanges} />
                {errors.password && 'Password must be longer than 5 characters'}
                
                <button>{login}</button>
            </div>
            <div>
                <p>Don't have an account? <Link>Sign up Here</Link> </p>
            </div>
        </form>
    </StyledForm>
  );
}

export default LoginForm



