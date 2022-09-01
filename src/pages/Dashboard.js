import React from "react"
import styled from "styled-components"
import Logo from "../assets/Logo.svg"
import HomeIcon from "../assets/Dashboard/HomeIcon.svg"
import ProfileIcon from "../assets/Dashboard/ProfileIcon.svg"
import OrdersIcon from "../assets/Dashboard/OrdersIcon.svg"
import CartIcon from "../assets/Dashboard/CartIcon.svg"

const DashboardWrapper = styled.div`
background: #FFFFFF;
color: #000; 

    .dashboard{
        display: flex;
    }

    .side-bar{
        padding: 2.36%;
        flex: 0.2;
        background: #FBFBFB;
        height: 100vh;
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
        padding: 2.36%;
        flex: 0.8;
        background: #FFFFFF;
    }

`

const Dashboard = () => {
    
    const username = JSON.parse(sessionStorage.getItem('user')).name

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
                <div className="main-salutation">
                    <h2>{`Good morning, ${username}`}</h2> 
                    <p></p>        
                </div>
                <div>

                </div>
            </div>
        </div>
    </DashboardWrapper>
)}

export default Dashboard