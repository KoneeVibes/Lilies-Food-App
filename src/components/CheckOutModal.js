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
        // left: 26em;
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

    
    function removeItem(e) {
        let newArr = [];
        sessionStorage.removeItem(`${parseInt(e.target.classList)} pcs`);
        const pcsArr = Object.keys(sessionStorage).filter(key => key.includes('pcs'))
        pcsArr.map(pcs => {
            const Qty = parseInt(`${sessionStorage.getItem(pcs)}`)
            newArr.push(Qty)
            return newArr
        });
        const totalItems = newArr.reduce((a, b) => a + b, 0)
        sessionStorage.setItem('items', totalItems);
        window.location.reload();
    }
    
    useEffect(() => {

        const removeButton = document.querySelectorAll('.remove');
        const subtotals = document.querySelectorAll('.sub-total');
        let subTotalsArray = [];
        let total;
        const totalValue = document.querySelector('.total');
        const checkOutModal = document.querySelector('.check-out-modal');
        const checkOutButton = document.querySelector('.check-out-button');
        const dashboardAndSideBar = document.querySelector('.dashboard-sidebar');
        const dashboard = document.querySelector('.main')

        subtotals.forEach(subtotal => {
            const valueOfSubTotal =  parseInt(subtotal.textContent);
            subTotalsArray.push(valueOfSubTotal);
            subTotalsArray.reduce((a, b) => {
            total = a + b;
            totalValue.textContent = `N ${total}.00`
            return total
           }, 0)
        })

        function removeModal(){
            checkOutModal.classList.add('display-none');
            dashboardAndSideBar.classList.remove('fixed-position');
            document.body.classList.remove('food-box')
            dashboard.classList.remove('cart-bg');
            window.location.reload()
        }

        checkOutButton.addEventListener('click', removeModal)
        removeButton.forEach(button => button.addEventListener('click', removeItem));
    })
    
  return (
    <ModalStyler>
        <h3 className='title'>Your Cart</h3>

        <table>
            <thead>
                <tr className='header'>
                    <th className='item-column'>Item</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Sub-total(N)</th>         
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
                        <td className='sub-total'>{parseInt(foodBoxArray[parseInt(i)].price) * parseInt(`${sessionStorage.getItem(i)}`)}</td>
                    </tr>          
              })
            }
            </tbody>
        </table>

        <div className='total-box'>
            <h3 className='total-title'>Total:</h3>
            <h3 className='total'>0</h3>
        </div>
        
        <div className='center-div'>
            <ActionButton text={text} index={index} />
        </div>
    </ModalStyler>
  )
}

export default CheckOutModal