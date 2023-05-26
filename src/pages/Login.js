import React from 'react'
import styled from 'styled-components'
import LeftBg from '../assets/Login/LeftBg.svg'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Styledwrapper = styled.div`
display: flex;
align-items: stretch;
gap: 2rem;
color: #00302EE8;
background: #FFFFFF;
height: inherit;

.form-flex-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 50%;
  padding: 4rem;
}

.image-flex-box{
  flex: 50%;
}

.image-flex-box img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bottom-flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fill-available;
}

.form-flex-box input{
  padding: 2rem;
  width: fill-available;
  margin-bottom: 1.5em;
  border: 1px solid #FBDDBB82;
  border-radius: 5px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

legend{
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  margin-bottom: 1.5em;
  text-align: center;
}

#login-button{
  width: fill-available;
  color: #FBDDBB;
  background: #00302E;
  text-align: center;
  border: none;
}

a, p{
  text-decoration: none;
  color: #00302E;
}

@media (max-width: 1024px){
  flex-direction: column;
}

@media (max-width: 480px){
  .form-flex-box{
    padding: 2rem;
  }

  .bottom-flex{
    flex-direction: column;
  }

  legend{
    overflow-wrap: anywhere;
  }

  .form-flex-box input{
      text-overflow: ellipsis;
  }
}

`

const Login = () => {

  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const handleFormSubmission = () => {
    const userLoginData = getValues();
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (userLoginData.email === '' || userLoginData.password === '') return
    if (userLoginData?.email === user?.email && userLoginData?.password === user?.password) {
      toast.success('Login Successful!');
      setInterval(() => { window.location = '/dashboard' }, 1000)
    } else {
      toast.error('Wrong Login Details!')
    }
  }

  return (
    <Styledwrapper>
      <div className='image-flex-box'>
        <img src={LeftBg} alt='Food' />
      </div>
      <div className='form-flex-box'>
        <ToastContainer />
        <form onSubmit={handleSubmit(handleFormSubmission)}>
          <legend>Welcome Back!</legend>
          <input
            {...register("email", { required: true })}
            type='email'
            placeholder='Your Email address'
          />
          <input
            {...register("password", { required: true })}
            type='password'
            placeholder='Your Password'
          />
          <input type="submit" value="LOGIN" id='login-button' ></input>
        </form>
        <div className='bottom-flex'>
          <Link to='/signup'>Create an account</Link>
          <p>Forgot Password</p>
        </div>
      </div>
    </Styledwrapper>
  )
}

export default Login