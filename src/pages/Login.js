import React from 'react'
import styled from 'styled-components'
import LeftBg from '../assets/Login/LeftBg.svg'

const Styledwrapper = styled.div`
background: #FFFFFF;
height: 100vh;
display: flex;
align-items: center;
color: #000;

.form{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-flex-box{
  height: 100%;
}

// .form-header{
//   flex: 0.2;
// }

.form-header h2{
  text-align: center;
}

// .form-content{
//   flex: 0.8;
// }
`

const Login = () => {
  return (
    <Styledwrapper>
      <div className='image-flex-box'>
        <img src={LeftBg} alt='Food' height='100%'/>
      </div>
      <div className='form'>
        <div className='form-header'>
          <h2>Welcome Back!</h2>
        </div>
        <div className='form-content'>
          <h2>Welcome Back!</h2>

        </div>
      </div>

    </Styledwrapper>
  )
}

export default Login