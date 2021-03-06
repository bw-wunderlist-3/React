import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'


const Flex = styled.div`
display:flex;
justify-content: center;
align-items:center;
background-color: oldlace;
color:#F44E31;
`

const StyledFormContainer = styled.div`
 @media (min-width: 1000px) {
            width: 500px;
 }
border: 2px solid black;
width: 30%;
background-color: #E9E9E9;
margin-top:11%;
margin-bottom:12%;

.form-header{
    background-color:#594a4e;
    color: white;
    padding:1%;
    border-bottom: 2px solid black;
}

.form-footer{
    background-color:#594a4e;
    padding:1%;
    border-top: 2px solid black;
}

label{
    margin-top:2%;
    color: black;
    margin-bottom:1%;

}
input{
    width:40%;
    margin-bottom: 3%;
}

.userInputs{
    display: flex;
    flex-direction: column;
    justify-items:center;
    align-items: center;
    background-color:#e9e9e9;
}
.terms{
    width:10%;
}
.submit{
    width: 20%;
    background-color:#F44E31;
    border:1px solid black;
    border-radius: 10%;
    padding: 1%;
    margin: 1%;
    transition: ease-in-out .5;

    &:hover{
        background-color: #e9e9e9;
        color: #F44E31;
        transition: ease-in-out .5s;
    }
}


`

const RegisterForm = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        email: ''
    })
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios
        .post(``)
        .then(() => {
          history.push('/')
        })
        .catch(err => console.log(err))
    }

    console.log(errors);

    const history = useHistory()

    const onChange = e => {
        const {name, value} = e.target;

        setCredentials({
            ...credentials,
            [name]:value
        })
    }


    const registerEvent = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/users/register', credentials)
        .then(res => {
        //   localStorage.setItem('token', res.data.payload)
        //   history.push('/protected')
        console.log(res.data)
        
        })
        .catch(err => {
          console.log('Login form error catch: ', err)
        })
      }


  
    return (
        <>
        <Flex>
        <StyledFormContainer className='register-form-container'>
            <div className="form-header">
            <h1>Join Us Today</h1>
                </div>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>

                <div className="userInputs">
                    <label>Username:</label>
                    <input type="text" placeholder="Enter Username" name="username" value={credentials.username} onChange={onChange} ref={register({required: true, min: 5})} />
                    {errors.username && 'Username must be at least 5 characters'}
                    <label>Password:</label>
                    <input type="password" placeholder="Enter Password" name="password" value={credentials.password} onChange={onChange} ref={register({required: true, min: 5})} />
                    {errors.password && 'Password must be at least 5 characters'}
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your Email" name="email" value={credentials.email} onChange={onChange} ref={register({required: true})} />
                    {errors.email && 'Please enter a vaild email'}
                </div>

                    <label>Terms and Conditions:</label>
                    <input type="checkbox" name="terms" className='terms' ref={register({required: true})} />
                    <br></br>
                    {errors.terms && 'You must agree to the terms and conditions'}
                <div className="form-footer">
                <button>{registerEvent}</button>
                </div>
            </form>
        </StyledFormContainer>

        {/* <div>
            {
                registerForm.map((user, index) =>{
                    const {username, password} = user;
                    return(
                        <div>
                            <h2>Username: {username}</h2>
                            <p>Password: {password}</p>
                        </div>
                    )

                })
            }
        </div> */}
        </Flex>
        </>
    );
}

export default RegisterForm