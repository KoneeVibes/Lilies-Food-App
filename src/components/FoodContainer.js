import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const FoodContainerWrapper = styled.div`

border: 0.3px solid rgba(0, 48, 46, 0.14);
border-radius: 5px;
margin: 0em 2em 2em 0em;
padding: 2.15em;
width: 240px;
height: 307px;
text-align: center;

h3{
  font-size: 17px;
  font-weight: 600;
  color: #00302E;
}

p{
  font-size: 11px;
  font-weight: 400;
  color: #000000B0;
}

.bottom-flex-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price{
  color: rgba(0, 48, 46, 1);
  font-size: 13px;
  font-weight: 700;
}

.action-button{
  color: rgba(6, 231, 117, 1);
  font-size: 13px;
  font-weight: 500;
  border: none;
  background: #fff;
  cursor: pointer;
}

`
const FoodContainer = ({ image, name, text, price, id, index}) => {

  // The line of code below and useEffect hook would help get the button element since document.getElementById does not work with react.
  // Then, the other lines of code are relevant actions that would take place upon the click of that button 

  const button = useRef(null);

  useEffect(() => {

    const actionButton = button.current;

    function addToggleClass() {
      // The below is the beginning of the process of giving each click event a unique ID
      // Ref: Line 251,343
      document.body.classList.add(`${id}`);
      // Ref: Line 265 of Dashboard.js
      document.body.classList.add('food-box');
      // Notice we passed in index as a prop, it is then invoked below with a value for parameter
      // This is how to pass a prop value from a child to parent
      // Ref: Lines 342-344 of Dashboard.js
      // We took advantage of the fact that parseInt() would only return a number here;
      index(parseInt(document.body.getAttribute('class')));

    }

    actionButton.addEventListener('click', addToggleClass)
  })


  return (
    <FoodContainerWrapper>
      <img src={image} alt='Food' />
      <h3>{name}</h3>
      <p style={{ lineHeight: '21px' }}>{text}</p>
      <div className='bottom-flex-box'>
        <p className='price'>{price}</p>
        <button className='action-button' ref={button}>Add to cart</button>
      </div>
    </FoodContainerWrapper>
  )
}

export default FoodContainer