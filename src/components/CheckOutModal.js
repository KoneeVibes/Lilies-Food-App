import React, { useEffect } from 'react'
import styled from 'styled-components'
import ActionButton from './ActionButton'
import Hamburger from '../assets/Dashboard/Hamburger.svg'
import Pasta from '../assets/Dashboard/Pasta.svg'
import ProteinBalls from '../assets/Dashboard/ProteinBalls.svg'
import EggMeal from '../assets/Dashboard/EggMeal.svg'
import Sandwich from '../assets/Dashboard/Sandwich.svg'
import Stew from '../assets/Dashboard/Stew.svg'

const ModalStyler = styled.div`

    h3{
        font-family: Poppins;
        font-size: 17px;
        font-weight: 600;
        line-height: 33px;
        color: #00302E;
    }

    table{
        width: 100%;
    }

    th{
        font-family: Poppins;
        font-size: 13px;
        font-weight: 500;
        line-height: 33px;
        text-align: left;
    }

    .item-column{
        width: 50%;
    }

    .image-cell{
        display: flex;
    }

`

const CheckOutModal = ({text, index}) => {

    const foodArray = [
        { name: 'Hamburger', image: <Hamburger />, introText: <p>This is the best Hamburger you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
        { name: 'Pasta', image: <Pasta />, introText: <p>This is the best Pasta you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
        { name: 'Protein Balls', image: <ProteinBalls />, introText: <p>This is the best Protein Ball you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
        { name: 'Egg Meal', image: <EggMeal />, introText: <p>This is the best Egg Meal you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
        { name: 'Sandwich', image: <Sandwich />, introText: <p>This is the best Sandwich you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
        { name: 'Stew', image: <Stew />, introText: <p>This is the best Stew you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
    ];

    const foodBoxArray = [].concat(foodArray);
    foodBoxArray.unshift({ name: <h3>Hamburger</h3>, image: <Hamburger />, text: <p>This is the best Hamburger you would ever taste</p>, price: 1000, maxQuantity: 10 })
    
    let pcs = Object.keys(sessionStorage).filter(key => key.includes('pcs'));

    useEffect(() => {

        const removeButton = document.querySelectorAll('.remove');

        function removeItem(e){

            sessionStorage.removeItem(`${parseInt(e.target.classList)} pcs`);
            window.location.reload()
    
        }

        removeButton.forEach(button => button.addEventListener('click', removeItem))

    })
    
    
  return (
    <ModalStyler>

        <h3>Your Cart</h3>

        <table>
            <thead>
                <tr className='header'>

                    <th className='item-column'>Item</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Sub-total</th>
                  
                </tr>
            </thead>
            <tbody>
            {
                pcs.map(i => {
                    return <tr className={i}>
                        <td className='image-cell'>
                            <img src={foodBoxArray[parseInt(i)].image.type} alt='food'></img>
                            <div>
                                <h3>{foodBoxArray[parseInt(i)].name}</h3>
                                <p className={i + " " + "remove"}>Remove</p>
                            </div>
                        </td>
                        <td>{parseInt(`${sessionStorage.getItem(i)}`)}</td>
                        <td>{`NGN${foodBoxArray[parseInt(i)].price}`}</td>
                        <td>{parseInt(foodBoxArray[parseInt(i)].price) * parseInt(`${sessionStorage.getItem(i)}`)}</td>
                    </tr>
                   
              })
            }
            </tbody>
        </table>

        <ActionButton text={text} index={index}/>

    </ModalStyler>
  )
}

export default CheckOutModal