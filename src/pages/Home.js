import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import HomeMainTop from '../assets/HomeMainTop.svg'
import PlaystoreMain from '../assets/PlaystoreMain.svg'
import IOSMain from '../assets/IOSMain.svg'
import IOSFooter from '../assets/IOSFooter.svg'
import PlaystoreFooter from '../assets/PlaystoreFooter.svg'
import HomeMainMid1 from '../assets/HomeMainMid1.svg'
import HomeMainMid2 from '../assets/HomeMainMid2.svg'
import HomeMainMid3 from '../assets/HomeMainMid3.svg'
import Twitter from '../assets/Twitter.svg'
import YouTube from '../assets/YouTube.svg'
import Instagram from '../assets/Instagram.svg'



const WrapperMain = styled.div`
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

    .header-links a{
        text-decoration: none;
        color: #FFFFFFDE;
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
        margin-top: 8em;
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
        margin: 0em 4em;
    }

    .main-mid-center{
        display: flex;
        justify-content: center;
        margin-top: 8em;
    }

    .text-center-innerdiv{
        text-align: center;
    }

    .main-next-mid{
        display: flex;
        justify-content: space-between;
        margin: 8em 0em 12em;
    }

    .main-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .main-bottom-interaction{
        display: flex;
        align-items: center;
    }

    .main-bottom-interaction input{
        height: 51px;
        width: 299px;
        border-radius: 5px;
        margin-right: 1em;
        padding-left: 1em;
    }

    .main-bottom-interaction button{
        height: 51px;
        width: 182px;
        border-radius: 5px;
        background: #FBDDBB;
        border: none;
    }
`
const WrapperFooter = styled.footer`

background: #0B0D17;
margin: 8em 0em 0em;

    footer{
        background: #0B0D17;
    }

    .footer-top{
        display: flex;
        justify-content: space-between;
        padding: 4em 8em;
    }  
    
    .footer-top-install-app{
        display: flex;
        flex-direction: column;
    }

    .img-margin-bottom{
        margin-bottom: 1em;
    }

    .footer-bottom{
        border-top: 1px solid rgba(255, 255, 255, .1);
        padding: 0.5em 10em;    
        display: flex;
        align-items: center;  
        justify-content: space-between; 
    }
    
    .img-margin-right{
        margin-right: 1em;
    }

`

const Home = () => {
  return (
    <>
        <WrapperMain>
            <header>
                <div className='header-logo-items'>
                    <img src={Logo} alt='Lilies Logo' className='header-item-margin'/>
                    <h2>Lilies</h2>
                </div>
                <div className='header-links'>
                    <Link to='/'><h4 className='header-item-margin'>Home</h4></Link>
                    <Link to='login'><h4 className='header-item-margin'>Login</h4></Link>
                    <button className='signup-button'><Link to='signup'><h3>Sign Up</h3></Link></button>
                </div>
            </header>
            <main>
                    <div className='main-top'>
                        <div className='main-top-left'>
                            <h1>Order food anytime, anywhere</h1>
                            <p>Browse from our list of specials to place your order and have food <br/> delivered to you in no time. Affordable, tasty and fast!</p>
                            <img src={PlaystoreMain} alt='Download Button'/>
                            <img src={IOSMain} alt='Download Button'/>
                        </div>
                        <img src={HomeMainTop} alt='Food' className='main-top-right'/>
                    </div>
                    <div className='main-mid-center'>
                        <div className='text-center-innerdiv'>
                            <h2>Special Meals of the day!</h2>
                            <p>Check our specials of the day and get discounts on all our meals <br/>and swift delivery to what ever location within Ilorin.</p>
                        </div>
                    </div>
                    <div className='main-next-mid'>
                        <div className='text-center-innerdiv'>
                            <img src={HomeMainMid1} alt='Food'/>
                            <h2>Stir fry Pasta</h2>
                            <p>Stir fry pasta yada yada yada <br/> because of Sesan</p>
                        </div>
                        <div className='text-center-innerdiv'>
                            <img src={HomeMainMid2} alt='Food'/>
                            <h2>Meat Balls</h2>
                            <p>Stir fry pasta yada yada yada <br/> because of Sesan</p>
                        </div>
                        <div className='text-center-innerdiv'>
                            <img src={HomeMainMid3} alt='Food'/>
                            <h2>Burger Meal</h2>
                            <p>Stir fry pasta yada yada yada <br/> because of Sesan</p>
                        </div>
                    </div>
                    <div className='main-bottom'>
                        <div className='main-bottom-info'>
                            <h2>Get notified when we update!</h2>
                            <p>Get notified when we add new items to our specials menu, <br/> update our price list of have promos!</p>
                        </div>
                        <div className='main-bottom-interaction'>
                            <input type="email" name="submit-button" placeholder="koneevibes@gmail.com"/>
                            <label for="submit-button">
                                <button><h3>Get notified</h3></button>
                            </label>
                        </div>
                    </div>
            </main>
        </WrapperMain>
        <WrapperFooter>
            <footer>
                <div className='footer-top'>
                    <div className='footer-top-company'>
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='footer-top-support'>
                        <h4>Support</h4>
                        <p>Help Center</p>
                        <p>Safety Center</p>
                    </div>
                    <div className='footer-top-legal'>
                        <h4>Legal</h4>
                        <p>Cookies Policy</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Dispute resolution</p>
                    </div>
                    <div className='footer-top-install-app'>
                        <h4>Install App</h4>
                        <img src={IOSFooter} alt=''download button className='img-margin-bottom'/>
                        <img src={PlaystoreFooter} alt=''download button className='img-margin-bottom'/>  
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>© 2021 LILIES, All rights reserved</p>
                    <div>
                        <img src={Instagram} alt='instagram icon' className='img-margin-right'/>
                        <img src={Twitter} alt='twitter icon' className='img-margin-right'/>
                        <img src={YouTube} alt='youtube icon' className='img-margin-right'/>
                    </div>
                </div>
            </footer>
        </WrapperFooter>
    </>
    
  )
}

export default Home