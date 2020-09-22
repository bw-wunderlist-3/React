import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div className='form-contiainer'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username:</label>
            <br></br>
            <input type="text" placeholder="Username" name="username" ref={register({required: true, min: 5})} />
            <br></br>
            {errors.username && 'Username must be longer than 5 characters'}


            <br></br>
            <label>Password:</label>
            <br></br>
            <input type="password" placeholder="Password" name="password" ref={register({required: true, min: 5})} />
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