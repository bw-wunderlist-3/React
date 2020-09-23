import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'

const StyledFormContainer = styled.div`
border: 2px solid black;
width:40%;

label{
    margin-top:2%;

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
}
.terms{
    width:10%;
}
.submit{
    width: 20%;
}
`



const RegisterForm = () => {
    const [registerForm, setRegisterForm] = useState([])
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        email: ''
    })
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    useEffect(()=>{
        //only handle the initial fetch
        axios
          .get(``)
          .then(res => {
            setRegisterForm([...res.data])
          })
          .catch(err => console.log(err))
      },[])

          //onchange
    const onChange = e => {
        const {name, value} = e.target;

        setNewUser({
            ...newUser,
            [name]:value
        })
    }
  
    return (
        <StyledFormContainer className='register-form-container'>
            <h1>Join Us Today</h1>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>

                <div className="userInputs">
                    <label>Username:</label>
                    <input type="text" placeholder="Enter Username" name="username" value={newUser.username} onChange={onChange} ref={register({required: true, min: 5})} />
                    {errors.username && 'Username must be at least 5 characters'}
                    <label>Password:</label>
                    <input type="password" placeholder="Enter Password" name="password" value={newUser.password} onChange={onChange} ref={register({required: true, min: 5})} />
                    {errors.password && 'Password must be at least 5 characters'}
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your Email" name="email" value={newUser.email} onChange={onChange} ref={register({required: true})} />
                    {errors.email && 'Please enter a vaild email'}
                </div>

                <div className='termsBox'>
                    <label>Terms and Conditions:</label>
                    <input type="checkbox" name="terms" className='terms' ref={register({required: true})} />
                    <br></br>
                    {errors.terms && 'You must agree to the terms and conditions'}
                </div>
                <input type="submit" className='submit' />
            </form>
        </StyledFormContainer>

        <div>
            {
                registerForm.map((user, index) =>{
                    const {username, password} = user;
                    return(
                        <div>
                            <h2>Username: {username}</h2>
                            <p>Password Length: {password.length}</p>
                        </div>
                    )

                })
            }
        </div>
    );
}

export default RegisterForm