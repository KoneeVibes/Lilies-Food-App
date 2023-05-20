import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../context/Context'

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
const FoodContainer = ({ image, name, text, price }) => {

  const { setNavLink, setFoodContainer } = useContext(Context);
  const handleClick = () => {
    setNavLink(null)
    setFoodContainer(name)
  }

  return (
    <FoodContainerWrapper>
      <img src={image} alt='Food' />
      <h3>{name}</h3>
      <p style={{ lineHeight: '21px' }}>{text}</p>
      <div className='bottom-flex-box'>
        <p className='price'>{price}</p>
        <button className='action-button' onClick={handleClick}>Add to cart</button>
      </div>
    </FoodContainerWrapper>
  )
}

export default FoodContainer