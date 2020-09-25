import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory, Link} from 'react-router-dom'
import styled from 'styled-components'


//styles

const StyledForm = styled.div`
 @media (min-width: 1000px) {
            width: 500px;
 }
border: 2px solid black;
width: 30%;
background-color: #E9E9E9;
margin-top:13%;
margin-bottom:13%;

.form-header{
    background-color: #594A4E;
    padding:1%;
    border-bottom: 2px solid black;
    color:white;
} 
.form-footer{
    background-color: #594A4E;
    padding:1%;
    border-top: 2px solid black;
    color:white;
}

.formInputs{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:black;
    margin:2%;
    font-size: 1.2rem;
}

input{
    margin: 2%;
}

button{
    color:black;
    background-color: #F44E31;
    outline: none;
    border: 1px solid black;
    padding:1%;
    width:15%;
    border-radius:10%;
    transition: ease-in-out .5s;

    &:hover{
        color:#F44E31;
        background-color: #E9E9E9;
        transition: ease-in-out .5s;
    }
}

.link{
    color:#F44E31;
}
`
const Flex = styled.div`
display: flex;
justify-content:center;
align-items: center;
background-color: oldlace;
color: #f44e31;
`
//styles end


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
        <Flex>
            <StyledForm className='form-contiainer' >
                <div className="form-header">
                    <h1>Sign In To Your Account</h1>
                </div>
                <form onSubmit={login}>
                    <div className="formInputs">
                        <label htmlFor='username'>Username:</label>
                        <input type="text" placeholder="Username" name="username" value={credentials.username} ref={register({required: true, min: 5})} onChange={handleChanges} />
                        {errors.username && 'Username must be longer than 5 characters'}
                        {console.log(credentials)}
                        

                        <label htmlFor='password'>Password:</label>
                        <input type="password" placeholder="Password" name="password" value={credentials.password} ref={register({required: true, min: 5})} onChange={handleChanges} />
                        {errors.password && 'Password must be longer than 5 characters'}
                        
                        <button>Login{login}</button>
                    </div>
                    <div className='form-footer'>
                        <p>Don't have an account? <Link to="/register" className="link">Sign up Here</Link> </p>
                    </div>
                </form>
            </StyledForm>
        </Flex>
    );

}

export default LoginForm



