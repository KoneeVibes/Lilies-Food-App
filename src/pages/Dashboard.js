import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Logo from "../assets/Logo.svg"
import HomeIcon from "../assets/Dashboard/HomeIcon.svg"
import ProfileIcon from "../assets/Dashboard/ProfileIcon.svg"
import OrdersIcon from "../assets/Dashboard/OrdersIcon.svg"
import CartIcon from "../assets/Dashboard/CartIcon.svg"
import ProfilePhoto from "../assets/Dashboard/ProfilePhoto.svg"
import FoodContainer from "../components/FoodContainer"
import Hamburger from '../assets/Dashboard/Hamburger.svg'
import Pasta from '../assets/Dashboard/Pasta.svg'
import ProteinBalls from '../assets/Dashboard/ProteinBalls.svg'
import EggMeal from '../assets/Dashboard/EggMeal.svg'
import Sandwich from '../assets/Dashboard/Sandwich.svg'
import Stew from '../assets/Dashboard/Stew.svg'
import FoodCart from "../components/FoodCart"
import CheckOutModal from "../components/CheckOutModal"
import MakePaymentModal from "../components/MakePaymentModal"
import OrdersModal from "../components/OrdersModal"
import { Link } from "react-router-dom"


const DashboardWrapper = styled.div`
background: #FFFFFF;
color: #000; 

    .dashboard-sidebar{
        display: flex;
        overflow-x : hidden;
    }

    .side-bar{
        position: fixed;
        top: 0;
        bottom: 0;
        padding: 2.36%;
        width: 20vw;
        background: #FBFBFB;
    }

    .side-bar p{  
        font-size: 16px;
        font-weight: 400;
        color: #000000;

    }

    .side-bar h2{
        font-size: 33px;
        font-weight: 700;
        color: #00302E;

    }

    .header-logo-items{
        display: flex;
        align-items: center;
        margin: 2em 0em 2em;
    }

    .icon-margin{
        margin-right: 2em;
    }

    .side-bar-item{
        display: flex;
        align-items: center;
        padding-left: 1em;
        margin-right: 4.25em;
        opacity: 0.5;
    }

    .sustain-depression{
        background: #EFEFEF;
        border-radius: 12px;
        cursor: pointer;
        opacity: 1;
        transform: scale(1.05);
    }

    .side-bar-item:hover{
        transform: scale(1.05);
        cursor: pointer;
        opacity: 0.75;
    }

    .cart-info{
        background: #F3C294;
        border: 1px solid #F3C294;
        border-radius: 5px;
        padding: 2px;
        margin-left: 2.85em;
    }

    .orders-info{
        background: #06E775;
        border: 1px solid #06E775;
        border-radius: 5px;
        padding: 2px;
        margin-left: 4.13em;
    }

    .main{
        padding: 2.36% 4.72% 2.36%;
        flex: 0.8;
        background: #FFFFFF;
        position: relative;
        left: 20vw; 
    }

    .main-top{
        display: flex;
        align-items: center;
        margin: 3em 0em 3em;
    }

    .main-salutation{
        flex: 0.8;
    }

    .main-salutation h2{
        font-size: 23px;
        font-weight: 600;
        color: #00302E;
    }

    .main-salutation p{
        font-size: 14px;
        font-weight: 400;
        color: #000000B0;
    }

    .main-photo-box{
        flex: 0.2;
        display: flex;
        justify-content: flex-end;
    }

    .main-food-library{
        margin-top: 4em;
        display: flex;
        flex-wrap: wrap;
    }

    .display-none{
        display: none;
    }

    .item-container{
        position: fixed;
        top: 0;
        right: 0;
        width: 30%;
        background: rgba(255, 255, 255, 1);
        padding: 6.25em 2em 10.75em;
        text-align: center;
        height: 100vh;
        overflow-y: hidden;
    }

    .close-button{
       text-align: left;
    }

    .cart-bg{
        background: rgba(196, 196, 196, 0.42);
        pointer-events:none;
        position: fixed;
    }

    .item-container-action-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5em;
    }

    .item-container-buttons{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container-food-name{
        font-size: 17px;
        font-weight: 600;
        color: rgba(0, 48, 46, 1);
        line-height: 33px;
    }

    .container-food-text{
        font-size: 11px;
        font-weight: 400;
        line-height: 27px;

    }

    .item-container-action-info h3{
        font-size: 17px;
        font-weight: 600;
        color: rgba(0, 48, 46, 1);
    }

    .add-subtract-buttons{
        display: flex;
        font-family: Poppins;
        align-items: center;
    }

    .add-subtract-buttons p{
        font-family: Poppins;
        font-size: 27px;
        font-weight: 600;
    }

    .subtract-button, .add-button{
        background: rgba(243, 194, 148, 1);
        border: none;
        cursor: pointer;
        padding: 0.18em 1em;
        font-size: 31px;
        font-weight: 600;
    }

    .margin-left{
        margin-left: 1em;
    }

    .margin-right{
        margin-right: 1em;
    }

    .cart-button{
        border: none;
        cursor: pointer;
        padding: 15px 37px; 
        background: rgba(0, 48, 46, 1);
        color: rgba(251, 251, 251, 1);
        font-size: 13px;
        font-weight: 600;
    }

    .check-out-modal, .orders-modal{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 45%;
        background: rgba(255, 255, 255, 1);
        padding: 30px 16px 56px;
        overflow-x: hidden;
    }

    .make-payment-modal{
        position: fixed;
        top: 0;
        right: 0;
        width: 35%;
        background: rgba(255, 255, 255, 1);
        padding: 3.25em 2em 10.75em;
        text-align: center;
        height: 100vh;
        overflow-y: hidden;
    }

`

const Dashboard = () => {

    const username = JSON.parse(sessionStorage.getItem('user')).name;

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

    // const order = useRef(null);
    const cart = useRef(null);
    const orders = useRef(null);
    const foodActionBox = useRef(null);
    const dashboardElement = useRef(null);
    
    // Ref: Line61 of FoodContainer.js and 343 of this page.
    let count = 0;
    // The code is the beginning of the process of passing a prop value from child to parent;
    // Refer to line 342-344 of this page and 63, 64 of FoodContainer.js for complete understanding.
    const [index, setindex] = useState(0)
    const [items, setitems] = useState(0)

    useEffect(() => {   
        const cartInfo = cart.current;
        const ordersInfo = orders.current;
        const FoodBox = foodActionBox.current;
        const dashboard = dashboardElement.current;
        const cartButton = document.querySelector('.cart');
        const checkOutModal = document.querySelector('.check-out-modal');
        const dashboardButton = document.querySelector('.dashboard');
        const MakePaymentModal = document.querySelector('.make-payment-modal');
        const OrdersModal = document.querySelector('.orders-modal');
        const ordersButton = document.querySelector('.orders');

       
        // The block of code below would toggle the foodbox on and off at various instances
        // Ref: Line 62 of FoodContainer.js
        
        function toggleClass() {
            document.body.classList.contains('food-box') ?
                FoodBox.classList.remove('display-none') : FoodBox.classList.add('display-none');
        }

        function toggleBgColor() {
            if (document.body.classList.contains('food-box')) {
                dashboard.classList.add('cart-bg');
            } else {
                dashboard.classList.remove('cart-bg');
            }
        }

        function addCheckOutModal(){
            ordersButton.classList.remove('sustain-depression');
            dashboardButton.classList.remove('sustain-depression')
            OrdersModal.classList.add('display-none');
            MakePaymentModal.classList.add('display-none');
            checkOutModal.classList.remove('display-none');
            cartButton.classList.add('sustain-depression');
            // the only way to add cart-bg class would be to add food-box to the document's body. So here we go!
            document.body.classList.add('food-box');
            dashboard.classList.add('cart-bg');
        }

        function refreshDashboard(){
            window.location.reload();
        }

        function addOrdersModal(){
            cartButton.classList.remove('sustain-depression');
            dashboardButton.classList.remove('sustain-depression');
            checkOutModal.classList.add('display-none');
            MakePaymentModal.classList.add('display-none');
            OrdersModal.classList.remove('display-none');
            ordersButton.classList.add('sustain-depression')
            document.body.classList.add('food-box');
            dashboard.classList.add('cart-bg');
        }

        // A way to check for our conditions would be to do so at regular intervals
        setInterval(toggleClass, 10);
        setInterval(toggleBgColor, 10);

        sessionStorage.getItem('items') ? cartInfo.innerHTML = sessionStorage.getItem('items') : cartInfo.innerHTML = items;

        let pcs = Object.keys(sessionStorage).filter(key => key.includes('pcs'));

        pcs? ordersInfo.innerHTML = pcs.length : ordersInfo.innerHTML = 0;

        cartButton.addEventListener('click', addCheckOutModal)
        dashboardButton.addEventListener('click', refreshDashboard)
        ordersButton.addEventListener('click', addOrdersModal)
    })

    return (
        <DashboardWrapper>
            <div className="dashboard-sidebar" >
                <div className="side-bar">
                    <div className='header-logo-items'>
                        <Link to='/'><img src={Logo} alt='Food app logo' className="icon-margin" /></Link>
                        <h2>Lilies</h2>
                    </div>
                    <div className="side-bar-item dashboard sustain-depression">
                        <img src={HomeIcon} alt='Home Icon' className="icon-margin" />
                        <p>Dashboard</p>
                    </div>
                    <div className="side-bar-item">
                        <img src={ProfileIcon} alt='Profile Icon' className="icon-margin" />
                        <p>Your Profile</p>
                    </div>
                    <div className="side-bar-item orders">
                        <img src={OrdersIcon} alt='Orders Icon' className="icon-margin" />
                        <p>Orders</p>
                        <p ref={orders} className="orders-info"></p>
                    </div>
                    <div className="side-bar-item cart">
                        <img src={CartIcon} alt='Cart Icon' className="icon-margin" />
                        <p>Your Cart</p>
                        <p ref={cart} className="cart-info"></p>
                    </div>
                </div>
                <div className="main" ref={dashboardElement}>
                    <div className="main-top">
                        <div className="main-salutation">
                            <h2>{`Good morning, ${username}!`}</h2>
                            <p>What delicious meal are you craving today?</p>
                        </div>
                        <div className="main-photo-box">
                            <img src={ProfilePhoto} alt='userphoto' />
                        </div>
                    </div>

                    <div className="main-food-library">
                        {
                            foodArray.map(food => {
                                // Ref: Lines 61 of FoodContainer.js and 251 of this page
                                count = count + 1;
                                // So many prop values are passed in the code below, mostly from parent to child;
                                // But the last prop takes in a value from a child (Refer to line 64 in FoodContainer.js);
                                return <FoodContainer image={food.image.type} name={food.name} text={food.introText} price={`N${food.price}`} id={count} setindex={setindex} />
                            })
                        }
                    </div>
                </div>
            </div>
            
            <div className="display-none item-container" ref={foodActionBox}>
                <FoodCart index={index} setitems={setitems} items={items} />
            </div>

            <div className="display-none check-out-modal">
                <CheckOutModal/>
            </div>

            <div className="display-none make-payment-modal">
                <MakePaymentModal/>
            </div>

            <div className="display-none orders-modal">
                <OrdersModal/>
            </div>
        </DashboardWrapper>
    )
}

export default Dashboard