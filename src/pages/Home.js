import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.svg'
import HomeMainTop from '../assets/HomeMainTop.svg'
import DownloadButton from '../assets/DownloadButton.png'

const Wrapper = styled.div`
padding:  2.36%;
font-weight: 500px;

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header-logo-items{
        display: flex;
        align-items: center;
    }

    .header-links{
        display: flex;
        align-items: center;
    }

    .header-item-margin{
        margin-right: 2em;
    }

    .signup-button{
        background: #E2B887;
        border-radius: 7px;
        border: none;
        width: 142px;
        height: 53px;
    }

    .main-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 4em;
    }

    .main-top h1{
        font-size: 50px;
    }

    .main-top-left{
        flex: 0.7;
        margin-right: 16em;
    }

    .main-top-left img{
        margin: 1em 1em 0em 0em;
    }

    .main-top-right{
        flex: 0.3;
        // margin: 0em 4em;
    }

    .main-mid-center{
        display: flex;
        justify-content: center;
        margin-top: 4em;
    }

    .main-mid-center-innerdiv{
        text-align: center;
    }

`

const Home = () => {
  return (
    <Wrapper>
       <header>
        <div className='header-logo-items'>
            <img src={Logo} alt='Lilies Logo' className='header-item-margin'/>
            <h2>Lilies</h2>
        </div>
        <div className='header-links'>
            <h4 className='header-item-margin'>Home</h4>
            <h4 className='header-item-margin'>Login</h4>
            <button className='signup-button'><h3>Sign Up</h3></button>
        </div>
       </header>
       <main>
            <div className='main-top'>
                <div className='main-top-left'>
                    <h1>Order food anytime, anywhere</h1>
                    <p>Browse from our list of specials to place your order and have food <br/> delivered to you in no time. Affordable, tasty and fast!</p>
                    <img src={DownloadButton} alt='Download Button'/>
                    <img src={DownloadButton} alt='Download Button'/>
                </div>
                <img src={HomeMainTop} alt='Food' className='main-top-right'/>
            </div>
            <div className='main-mid-center'>
                <div className='main-mid-center-innerdiv'>
                    <h2>Special Meals of the day!</h2>
                    <p>Check our specials of the day and get discounts on all our meals <br/>and swift delivery to what ever location within Ilorin.</p>
                </div>
            </div>
       </main>
    </Wrapper>
  )
}

export default Home