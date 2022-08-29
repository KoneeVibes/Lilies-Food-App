import React from 'react'
import styled from 'styled-components'
import LeftBg from '../assets/Login/LeftBg.svg'

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
  // padding: 2.5em 30.5em 1.35em 2.5em;
  width: 30.5em;
  height: 4.4375em;
  margin: 1.5em;
  border: 1px solid #FBDDBB82;
  border-radius: 5px;
}

#login-button{
  // width: 31em;
  color: #FBDDBB;
  background: #00302E;
  text-align: center;
}

.margin-right-p{
  margin-right: 11em;
}

.margin-left-p{
  margin-left: 9em;
}
`

const Login = () => {
  return (
    <Styledwrapper>
      <div className='image-flex-box'>
        <img src={LeftBg} alt='Food' height='100%'/>
      </div>
      <div className='form-flex-box'>
        <h2>Welcome Back!</h2>
        <form>
           <input type='email' placeholder='Your Email address'/><br/>
           <input type='password' placeholder='Your Password'/><br/>
           <input type="submit" value="LOGIN" id='login-button'></input>
        </form>
        <div className='bottom-flex'>
          <div><p className='margin-right-p'>Create an account</p></div> 
          <div><p className='margin-left-p'>Forgot Password</p></div> 
        </div>
      </div>

    </Styledwrapper>
  )
}

export default Login