import React, { useEffect } from 'react'
import Hamburger from '../assets/Dashboard/Hamburger.svg'
import Pasta from '../assets/Dashboard/Pasta.svg'
import ProteinBalls from '../assets/Dashboard/ProteinBalls.svg'
import EggMeal from '../assets/Dashboard/EggMeal.svg'
import Sandwich from '../assets/Dashboard/Sandwich.svg'
import Stew from '../assets/Dashboard/Stew.svg'
import styled from 'styled-components'

const ModalStyler = styled.div`

margin-left: 2.5em;

    .title{
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
        text-align: center;
    }

    .item-column{
        width: 50%;
        text-align: left;
    }

    .image-cell{
        display: flex;
    }
    
    .total-box{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    }

    td{
        margin: 1em 0;
    }

    .qty, .price, .sub-total{
        font-family: Poppins;
        font-size: 17px;
        font-weight: 700;
        line-height: 33px;
        text-align: center;
    }

    .name-remove-box{
        margin-left: 1em;
    }

    .remove{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 500;
        color: #C92C33;
        cursor: pointer;
    }

    .name{
        font-family: Poppins;
        font-size: 17px;
        font-weight: 600;
        color: #00302E;
    }

    .total{
        font-family: Poppins;
        font-size: 21px;
        font-weight: 700;
        line-height: 33px;
        color: #00302E;
    }

    .total-title{
        font-family: Poppins;
        font-size: 17px;
        font-weight: 600;
        line-height: 33px;
        margin-right: 1em;
    }

    .center-div{
        display: flex;
        justify-content: center;
    }

    .close{
        color: #C92C33;
        border-color: #00302E;
        background: #FFF;
        cursor: pointer;
    }

`

const OrdersModal = () => {

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
      
        const closeModal = document.querySelector('.close-orders-modal');
        const OrdersModal = document.querySelector('.orders-modal');
        const dashboard = document.querySelector('.main');
        const ordersButton = document.querySelector('.orders');
        const dashboardButton = document.querySelector('.dashboard');

        function removeModal(){
            dashboardButton.classList.add('sustain-depression');
            OrdersModal.classList.add('display-none');
            ordersButton.classList.remove('sustain-depression')
            document.body.classList.remove('food-box');
            dashboard.classList.remove('cart-bg');
        }
        
        closeModal.addEventListener('click', removeModal)
    })
    

  return (
    <ModalStyler>
        <button className='close close-orders-modal'>X</button>

        <h3 className='title'>Your Orders</h3>

        <table>
            <thead>
                <tr className='header'>
                    <th className='item-column'>Item</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {
                    pcs.map(i => {
                        return <tr className={i}>
                            <td className='image-cell'>
                                <img src={foodBoxArray[parseInt(i)].image.type} alt='food'></img>
                                <div className='name-remove-box'>
                                    <h3 className='name'>{foodBoxArray[parseInt(i)].name}</h3>
                                    <p className={`${i} remove`}>Remove</p>
                                </div>
                            </td>
                            <td className='qty'>{parseInt(`${sessionStorage.getItem(i)}`)}</td>
                            <td className='price'>{`N ${foodBoxArray[parseInt(i)].price}`}</td>
                            <td className='status'></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </ModalStyler>
  )
}

export default OrdersModal