import React from 'react'
import styled from 'styled-components'

const ButtonStyler = styled.div`

#action-button{

//   padding-left: 6px;
  width: 488px;
  height: 60px;
  color: #F3C294;
  background: #00302E;
  text-align: center;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 27px
  
}

`


const ActionButton = ({text}) => {
  return (
    <ButtonStyler>
        <input type="submit" value={text} id='action-button' ></input>
    </ButtonStyler>
  )
}

export default ActionButton