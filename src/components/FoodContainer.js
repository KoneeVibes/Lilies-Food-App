import React from 'react'
import styled from 'styled-components'

const FoodContainerWrapper = styled.div`

border: 0.3px solid rgba(0, 48, 46, 0.14);
border-radius: 5px;
margin: 0em 2em 2em 0em;
padding: 2.15em;
width: 240px;
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

`

const FoodContainer = ({image, name, text, price}) => {
  return (
    <FoodContainerWrapper>
        <img src={image} alt='Food'/>
        <h3>{name}</h3>
        <p>{text}</p>
        <div className='bottom-flex-box'>
          <p>{price}</p>
          <p>Add to cart</p>
        </div>
    </FoodContainerWrapper>
  )
}

export default FoodContainer