import React, { useState } from 'react'
import styled from 'styled-components'
import LeftBg from '../assets/Register/LeftBg.svg'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


const Styledwrapper = styled.div`
background: #FFFFFF;
height: 100vh;
overflow: hidden;
display: flex;
align-items: center;
color: #00302EE8;


.form-flex-box{
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
}

.image-flex-box{
  flex: 1;
}

.bottom-flex{
  display: flex;
  align-items: center;
}

.form-flex-box input{
  padding-left: 1em;
  width: 40.5em;
  height: 4.4375em;
  margin: 1.5em;
  border: 1px solid #FBDDBB82;
  border-radius: 5px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

.form-flex-box h2{
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
}

#sign-up-button{
  padding-left: 6px;
  width: 41.88em;
  color: #FBDDBB;
  background: #00302E;
  text-align: center;
  border: none;
}

.login-link{
  text-decoration: none;
  color: #00302E;
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
      <ToastContainer />
      <div className='image-flex-box'>
        <img src={LeftBg} alt='Food' height='100%' />
      </div>
      <div className='form-flex-box'>
        <h2>Welcome to Lilies!</h2>
        <form onSubmit={handleFormSubmission}>
          <input type='text' name='name' placeholder='Your First Name' onChange={handleFormInput} /><br />
          <input type='email' name='email' placeholder='Your Email address' onChange={handleFormInput} /><br />
          <input type='password' name='password' placeholder='Your Password' onChange={handleFormInput} /><br />
          <input type="submit" value="SIGN UP" id='sign-up-button'></input>
        </form>
        <p>Already have an account. <span><Link to='/login' className='login-link'>LOGIN</Link></span></p>
      </div>

    </Styledwrapper>
  )
}

export default SignUp