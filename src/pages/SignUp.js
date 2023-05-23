import React, { useState } from 'react'
import styled from 'styled-components'
import LeftBg from '../assets/Register/LeftBg.svg'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Styledwrapper = styled.div`
background: #FFFFFF;
display: flex;
gap: 2rem;
align-items: stretch;
color: #00302EE8;
height: inherit;

.form-flex-box{
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: center;
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

.form-flex-box input{
  width: fill-available;
  padding: 2rem;
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

#sign-up-button{
  width: fill-available;
  color: #FBDDBB;
  background: #00302E;
  text-align: center;
  border: none;
}

.login-link{
  text-decoration: none;
  color: #00302E;
}

p{
  text-align: center;
}

@media (max-width: 1024px){
  flex-direction: column;
}

@media (max-width: 480px){
  .form-flex-box{
    padding: 2rem;
  }

  legend{
    overflow-wrap: anywhere;
  }

  .form-flex-box input{
      text-overflow: ellipsis;
  }
}

`

const SignUp = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleFormInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // console.log(form)

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (form.name === '' || form.email === '' || form.password === '') return
    sessionStorage.setItem('user', JSON.stringify(form));
    toast.success('Sign Up Successful!')

    setInterval(() => {
      window.location = '/login'
    }, 1500)

  }

  return (
    <Styledwrapper>
      <div className='image-flex-box'>
        <img src={LeftBg} alt='Food' height='100%' />
      </div>
      <div className='form-flex-box'>
        <ToastContainer />
        <form onSubmit={handleFormSubmission}>
          <legend>Welcome to Lilies!</legend>
          <input type='text' name='name' placeholder='Your First Name' onChange={handleFormInput} />
          <input type='email' name='email' placeholder='Your Email address' onChange={handleFormInput} />
          <input type='password' name='password' placeholder='Your Password' onChange={handleFormInput} />
          <input type="submit" value="SIGN UP" id='sign-up-button'></input>
        </form>
        <p>Already have an account. <span><Link to='/login' className='login-link'>LOGIN</Link></span></p>
      </div>

    </Styledwrapper>
  )
}

export default SignUp