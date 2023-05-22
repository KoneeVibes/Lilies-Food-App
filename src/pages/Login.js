import React, { useState } from 'react'
import styled from 'styled-components'
import LeftBg from '../assets/Login/LeftBg.svg'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Styledwrapper = styled.div`
background: #FFFFFF;
height: 100vh;
overflow: hidden;
display: flex;
align-items: center;
color: #00302EE8;


.form-flex-box{
  display: flex;
  flex: 50%;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
  // height: 100%;
  // width: 100%;
}

.image-flex-box{
  flex: 50%;
}

.image-flex-box img{
  // height: 100%;
  width: 100%;
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

#login-button{
  padding-left: 6px;
  width: 41.88em;
  color: #FBDDBB;
  background: #00302E;
  text-align: center;
  border: none;
}

.margin-right-p{
  margin-right: 7.35em;
  text-decoration: none;
  color: #00302E;
}

.margin-left-p{
  margin-left: 7.35em;
}

@media (max-width: 1440px){
  // overflow: visible;

  .image-flex-box{
    // height: 50%;
  }
}
`

const Login = () => {

  const [userLoginData, setUserLoginData] = useState({
    email: '',
    password: '',
  })

  const handleFormInput = (e) => {
    setUserLoginData({

      // Used the spread operator to collect already existing values for email and password 
      ...userLoginData,
      // Then, I would update the userLoginData variable with this line of code;
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    let user = JSON.parse(sessionStorage.getItem('user'))
    if (userLoginData.email === '' || userLoginData.password === '') return
    // console.log(user)

    if (userLoginData?.email === user?.email && userLoginData?.password === user?.password){
      toast.success('Login Successful!');
      setInterval(() => {window.location = '/dashboard'}, 1000)
    }else{
      toast.error('Wrong Login Details!')
    }
  }

  return (
    <Styledwrapper>
      <ToastContainer/>
      <div className='image-flex-box'>
        <img src={LeftBg} alt='Food' height='100%'/>
      </div>
      <div className='form-flex-box'>
        <h2>Welcome Back!</h2>
        <form onSubmit={handleFormSubmission}>
          <input type='email' name='email' placeholder='Your Email address' onChange={handleFormInput}/><br/>
          <input type='password' name='password' placeholder='Your Password' onChange={handleFormInput}/><br/>
          <input type="submit" value="LOGIN" id='login-button' ></input>
        </form>
        <div className='bottom-flex'>
          <div><Link to='/signup' className='margin-right-p'>Create an account</Link></div>
          <div><p className='margin-left-p'>Forgot Password</p></div> 
        </div>
      </div>

    </Styledwrapper>
  )
}

export default Login