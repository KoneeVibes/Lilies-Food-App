import React from 'react'
import styled from 'styled-components'

const ButtonStyler = styled.div`

.check-out-button, .make-payment-button{
  margin-top: 30px;
  width: 515px;
  height: 60px;
  color: #F3C294;
  background: #00302E;
  text-align: center;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 27px;
  cursor: pointer;
  border-radius: 0;
}

`

const ActionButton = ({text, className}) => {

  return (
    <ButtonStyler>
        <input type="submit" value={text} className={className} ></input>
    </ButtonStyler>
  )
}

export default ActionButton