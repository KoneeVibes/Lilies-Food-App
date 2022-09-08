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


const DashboardWrapper = styled.div`
background: #FFFFFF;
color: #000; 

    .dashboard{
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
    }

    .side-bar-item:hover{
        background: #EFEFEF;
        border-radius: 12px;
    }

    .cart-info{
        background: #06E775;
        border: 1px solid #06E775;
        border-radius: 5px;
        padding: 2px;
        margin-left: 2.85em;
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

    .item-wrapper{
        // display: flex;
        // justify-content: center;
    }

    .item-container{
        position: fixed;
        top: 0;
        right: 0;
        width: 30%;
        background: rgba(255, 255, 255, 1);
        padding: 11.25em 2em 10.75em;
        text-align: center;
        height: 100vh;
        overflow-y: hidden;
    }

    .close-button{
       text-align: left;
    }

    .cart-bg{
        // background: rgba(196, 196, 196, 0.42);
        background: #FBFBFB;
    }

    .item-container-action-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2.5em;
    }

    .item-container-buttons{
        display: flex;
        justify-content: space-between;
    }

    .container-food-name{
        font-size: 17px;
        font-weight: 600;
        color: rgba(0, 48, 46, 1);

    }

    .container-food-text{
        font-size: 11px;
        font-weight: 400;
    }

    .item-container-action-info h3{
        font-size: 17px;
        font-weight: 600;
        color: rgba(0, 48, 46, 1);
    }

    .add-subtract-buttons{
        display: flex;
        font-family: Poppins;
    }

    .add-subtract-buttons h3{
        font-family: Poppins;
        font-size: 27px;
        font-weight: 600;
    }

    .subtract-button, .add-button{
        background: rgba(243, 194, 148, 1);
        border: none;
        cursor: pointer;
        padding: 0em 1em;
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
        padding: 1em; 
        background: rgba(0, 48, 46, 1);
        color: rgba(251, 251, 251, 1);
        font-size: 13px;
        font-weight: 600;
    }

`

const Dashboard = () => {

    const username = JSON.parse(sessionStorage.getItem('user')).name;

    const foodArray = [
        { name: <h3>Hamburger</h3>, image: <Hamburger />, text: <p>This is the best Hamburger you would ever taste</p>, price: 1000 },
        { name: <h3>Pasta</h3>, image: <Pasta />, text: <p>This is the best Pasta you would ever taste</p>, price: 1000 },
        { name: <h3>Protein Balls</h3>, image: <ProteinBalls />, text: <p>This is the best Protein Ball you would ever taste</p>, price: 1000 },
        { name: <h3>Egg Meal</h3>, image: <EggMeal />, text: <p>This is the best Egg Meal you would ever taste</p>, price: 1000 },
        { name: <h3>Egg Meal</h3>, image: <Sandwich />, text: <p>This is the best Sandwich you would ever taste</p>, price: 1000 },
        { name: <h3>Stew</h3>, image: <Stew />, text: <p>This is the best Stew you would ever taste</p>, price: 1000 },
    ];

    const foodBoxArray = [
        // The initial object below is to give the index variable a value on page load
        { image: <Hamburger />, age: 21 },
        { image: <Hamburger/>, age: 21 }, 
        { image: <Pasta/>, age: 26 }, 
        { image: <ProteinBalls/>, age: 27 },
        { image: <EggMeal/>, age: 27 },
        { image: <Sandwich/>, age: 27 },
        { image: <Stew/>, age: 27 }
    ]

    const cartButton = useRef(null);
    // const order = useRef(null);
    const cart = useRef(null);
    const itemBox = useRef(null);
    const dashboardElement = useRef(null)
    // Ref: Line61 of FoodContainer.js and 343 of this page.
    let count = 0;
    // The code is the beginning of the process of passing a prop value from child to parent;
    // Refer to line 342-344 of this page and 63, 64 of FoodContainer.js for complete understanding.
    const [index, setindex] = useState(0)
    
    useEffect(() => {
        const addToCartButton = cartButton.current;
        const cartInfo = cart.current;
        const FoodBox = itemBox.current;
        const dashboard = dashboardElement.current

        let items = JSON.parse(sessionStorage.getItem('items'));

        // The block of code below would toggle the foodbox on and off at various instances
        // Ref: Line 62 of FoodContainer.js
        function toggleClass() {
            document.body.classList.contains('food-box') ?
                FoodBox.classList.remove('display-none') : FoodBox.classList.add('display-none');

        }

        function addUpItems() {

            items = items + 1;
            sessionStorage.setItem('items', items);
            cartInfo.innerHTML = sessionStorage.getItem('items');
            document.body.className = ""
        }

        function toggleBgColor() {

            if (document.body.classList.contains('food-box')) {
                dashboard.classList.add('cart-bg');

            } else {
                dashboard.classList.remove('cart-bg');
            }
        }

        // A way to check for our conditions would be to do so at regular intervals
        setInterval(toggleClass, 10)
        setInterval(toggleBgColor, 10)

        cartInfo.innerHTML = sessionStorage.getItem('items');
        addToCartButton.addEventListener('click', addUpItems)
    })



    return (
        <DashboardWrapper>

            <div className="dashboard">
                <div className="side-bar">
                    <div className='header-logo-items'>
                        <img src={Logo} alt='Food app logo' className="icon-margin" />
                        <h2>Lilies</h2>
                    </div>
                    <div className="side-bar-item">
                        <img src={HomeIcon} alt='Home Icon' className="icon-margin" />
                        <p>Dashboard</p>
                    </div>
                    <div className="side-bar-item">
                        <img src={ProfileIcon} alt='Profile Icon' className="icon-margin" />
                        <p>Your Profile</p>
                    </div>
                    <div className="side-bar-item">
                        <img src={OrdersIcon} alt='Orders Icon' className="icon-margin" />
                        <p>Orders</p>
                        {/* <p ref={orders} className="orders-info"></p> */}
                    </div>
                    <div className="side-bar-item">
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
                                return <FoodContainer image={food.image.type} name={food.name} text={food.text} price={`N${food.price}`} id={count} index={setindex} />
                            })
                        }
                    </div>

                    <div className="item-wrapper">

                        <div className="display-none item-container" ref={itemBox}>
                            <img src={foodBoxArray[index].image.type } alt='hamburger meal' />
                            <h3 className="container-food-name">{foodBoxArray[index].age}</h3>

                            <p className="container-food-text">Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.</p>
                            <div className="item-container-action-info">
                                <h3 className="xx">NGN 2000.00</h3>
                                <h3 className="xx">10-20 Mins</h3>
                                <h3 className="xx">10 Pcs Avail</h3>
                            </div>
                            <div className="item-container-buttons">
                                <div className="add-subtract-buttons">
                                    <button className="subtract-button margin-right">-</button>
                                    <h3>1</h3>
                                    <button className="add-button margin-left">+</button>
                                </div>

                                <button className="cart-button" ref={cartButton}>Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </DashboardWrapper>
    )
}

export default Dashboard