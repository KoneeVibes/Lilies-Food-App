import React from "react"
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

`

const Dashboard = () => {
    
    const username = JSON.parse(sessionStorage.getItem('user')).name

    const foodArray = [
        {name: <h3>Hamburger</h3>, image: <Hamburger/>, text: <p>This is the best Hamburger you would ever taste</p>, price: 1000},
        {name: <h3>Pasta</h3>, image: <Pasta/>, text: <p>This is the best Pasta you would ever taste</p>, price: 1000},
        {name: <h3>Protein Balls</h3>, image: <ProteinBalls/>, text: <p>This is the best Protein Ball you would ever taste</p>, price: 1000},
        {name: <h3>Egg Meal</h3>, image: <EggMeal/>, text: <p>This is the best Egg Meal you would ever taste</p>, price: 1000},
        {name: <h3>Egg Meal</h3>, image: <Sandwich/>, text: <p>This is the best Sandwich you would ever taste</p>, price: 1000},
        {name: <h3>Stew</h3>, image: <Stew/>, text: <p>This is the best Stew you would ever taste</p>, price: 1000},
    ]

    return (
    <DashboardWrapper>
        <div className="dashboard">
            <div className="side-bar">
                <div className='header-logo-items'>
                    <img src={Logo} alt='Food app logo' className="icon-margin"/>
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
                    <img src={OrdersIcon} alt='Orders Icon' className="icon-margin"/>
                    <p>Orders</p>
                </div> 
                <div className="side-bar-item">
                    <img src={CartIcon} alt='Cart Icon' className="icon-margin"/>
                    <p>Your Cart</p>
                </div>       
            </div>
            <div className="main">
                <div className="main-top">
                    <div className="main-salutation">
                        <h2>{`Good morning, ${username}!`}</h2> 
                        <p>What delicious meal are you craving today?</p>        
                    </div>
                    <div className="main-photo-box">
                        <img src={ProfilePhoto} alt='userphoto'/>
                    </div>
                </div>
                
                <div className="main-food-library">
                    {
                        foodArray.map(food => {
                            // console.log(typeof food.name)
                            return <FoodContainer image={food.image.type} name={food.name} text={food.text} price = {`N${food.price}`} />
                        })
                    }
                </div>
            </div>
        </div>
    </DashboardWrapper>
)}

export default Dashboard