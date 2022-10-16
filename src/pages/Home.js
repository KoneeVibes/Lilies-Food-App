import React, { useRef, useEffect, useState } from 'react'
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
--min-navbar-height: 120px;
padding:  2.36%;

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: var(--min-navbar-height)
    }

    .header-logo-items{
        display: flex;
        align-items: center;
        gap: 2em;
    }

    .header-links{
        display: flex;
        align-items: center;
        gap: 2em;
    }

    .header-links a{
        text-decoration: none;
        color: #FFFFFFDE;
    }

    .header-links a:hover, .header-links a:active{
        color: #FBDDBB;
    }

    .active-link {
        color: rgba(251, 221, 187, 1);
    }

    .signup-button{
        background: #E2B887;
        border-radius: 7px;
        border: none;
        width: 142px;
        height: 53px;
    }

    .signup-button h3{
        color: #00302E;
        font-size: 17px;
        font-weight: 600;
    }

    .main-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8em;
    }

    .main-top h1{
        font-size: 64px;
        font-weight: 500;
    }

    .colored-text{
        color: #E2B887;
    }

    .main-top-left{
        flex: 0.7;
        // margin-right: 16em;
    }

    .main-top-left img{
        padding: 1em 1em 0em 0em;
    }

    .main-top-right{
        flex: 0.3;
        margin: 0em 4em;
        width: 100%;
    }

    .main-mid-center{
        display: flex;
        justify-content: center;
        margin-top: 8em;
    }

    .text-center-innerdiv{
        text-align: center;
    }

    .text-center-innerdiv img{
        width: 100%;
    }

    .text-center-innerdiv h2{
        font-size: 36px;
        font-weight: 700;
    }

    #text-center-innerdiv-pasta, #text-center-innerdiv-meatballs, #text-center-innerdiv-burger {
        font-size: 27px;
        font-weight: 700;
        color: #E2B887;
    }

    .main-next-mid{
        display: flex;
        justify-content: space-between;
        gap: 7em;
        margin: 8em 0em 12em;
    }

    .main-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 7em;
    }

    .main-bottom-info h2{
        font-size: 36px;
        font-weight: 700;
        color: #E2B887;
    }

    .main-bottom-interaction{
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .main-bottom-interaction input{
        border-radius: 5px;
        padding: 1em 11em 1em 1em;
        font-family: Rubik;
        font-size: 18px;
        font-weight: 400;
        border: none;
    }

    .main-bottom-interaction button{
        border-radius: 5px;
        background: #FBDDBB;
        border: none;
        padding: 1em 2.5em;
        font-family: Rubik;
        font-size: 18px;
        font-weight: 500;
        line-height: 21px;
    }

    .main-bottom-interaction h3{
        margin: 0;
        font-family: Rubik;
        font-size: 18px;
        font-weight: 500;
        font-family: Rubik;
    }

    .hamburger{
        display: none;
        cursor: pointer;
    }

    .bar{
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #FFF;
    }

    @media (min-width: 1023px) and (max-width: 1440px){
        .main-top h1{
            font-size: 48px;
        }

        .main-top-right{
            width: 35%;
        }

        .main-bottom-interaction input{
            padding: 1em;
        }

        .main-bottom-interaction button{
            padding: 1em;
        }

        .main-bottom-info h2{
            font-size: 30px;
        }
    }

    @media (max-width: 1023px){
        .hamburger{
            display: block;     
        }

        .hamburger.active .bar:nth-child(2){
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1){
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3){
            transform: translateY(-8px) rotate(-45deg);
        }

        .header-links{
            position: fixed;
            left: -100%;
            flex-direction: column;
            text-align: center;
            transition: 0.3;
            top: var(--min-navbar-height);
            background: #00302E;
            width: 100%;
            height: 100%;
        }

        .header-links.active{
            left: 0;
        }

        .main-top{
            flex-direction: column;
            margin-top: 2em;
            gap: 2em;
            align-items: flex-start;
        }

        .main-top-right{
            display: block;
            margin-left: auto;
            margin-right: auto;
            height: auto;
            width: 90%;
        }

        .main-bottom{
            flex-direction: column;
            gap: 2em;
        }
    }

    @media (max-width: 768px){

        padding: 2.36% 5%;

        .header-logo-items{
            gap: 0;
        }

        .header-logo-items img{
            width: 50%;
        }

        .header-logo-items a{
            width: 30%;
        }

        .main-top{
            flex-direction: column;
            margin-top: 2em;
            gap: 2em;
            align-items: flex-start;
        }

        .main-top h1{
            font-size: 30px;
        }

        .main-top-right{
            margin: 0;
            height: auto;
            width: 90%;
        }

        .main-top-left img{
            width: 25%;
        }

        .text-center-innerdiv img{
            width: 70%;
        }

        .main-next-mid{
            flex-direction: column;
        }

        .main-mid-center{
            margin-top: 2em;
        }

        .main-next-mid{
            margin: 2em 0 3em;
            gap: 3em;
        }

        .main-bottom-info h2{
            font-size: 27px;
            text-align: center;
        }

        .main-bottom-interaction input{
            padding: 1em;
        }

        .main-bottom-interaction button{
            font-size: 12px;
            padding: 1em;
        }
    }

    @media (max-width: 400px){
        .main-bottom-interaction{
            flex-direction: column;
        }
    }

    @media (max-width: 360px){
        .main-top h1{
            font-size: 20px;
        }

        .main-bottom-info h2{
            font-size: 18px;
            text-align: center;
        }

        #text-center-innerdiv-pasta, #text-center-innerdiv-meatballs, #text-center-innerdiv-burger{
            font-size: 16px;
        }

        .text-center-innerdiv h2{
            font-size: 18px;
        }
    }

    @media (max-width: 270px){

        .main-bottom-interaction{
            display: none;
        }
    }

    @media (max-width: 216px){
        .bar{
            margin: 1px auto;
            width: 15px
        }

        .main-top h1{
            font-size: 16px;
        }

        .text-center-innerdiv h2{
            font-size: 14px;
        }

        .main-bottom-info h2 {
            font-size: 14px;
        }

        #text-center-innerdiv-pasta, #text-center-innerdiv-meatballs, #text-center-innerdiv-burger{
            font-size: 14px;
        }

        .signup-button{
            width: 80%;
        }

        .signup-button h3{
            font-size: 12px;
        }
    }

    @media (max-width: 150px){
        .main-top h1{
            font-size: 7px;
        }

        .text-center-innerdiv h2{
            font-size: 6px;
        }

        .main-bottom-info h2 {
            font-size: 6px;
        }

        #text-center-innerdiv-pasta, #text-center-innerdiv-meatballs, #text-center-innerdiv-burger{
            font-size: 5px;
        }
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

    @media (max-width: 1440px){
        margin-top: 5em;

        .footer-top{
            flex-direction: column;
            padding: 5%;
        }

        .footer-bottom{
            flex-direction: column-reverse;
            padding: 4px;
        }

        .footer-bottom div{
            display: flex;
            align-items: center;
        }

        .footer-top-install-app img{
            width: 20%;
        }
    }

    @media (max-width: 768px){
        .footer-top-install-app img{
            width: 40%;
        }
    }

    @media (max-width: 150px){
        .footer-bottom div{
            flex-direction: column
        }

        .footer-bottom img{
            width: 25%;
        }
    }

`

const Home = () => {

    // I used the code below to get the home link since document.getElementById doesn't work with react.
    // I learnt this from stackoverflow

    const homeLink = useRef(null);

    const [isActive, setisActive] = useState(false);

    const toggleClass = () => {
        setisActive(!isActive);
        if (isActive) {
            document.body.style.overflowY = 'visible';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }

    useEffect(() => {
    
    const home = homeLink.current;
    const navMenu = document.querySelector('.header-links');
    const hamburger = document.querySelector('.hamburger');

    if (window.location.pathname === '/'){  
        home.classList.add('active-link');
    }

    document.querySelectorAll('a').forEach(i => i.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflowY = 'visible'; 
    }));

    function resetToDefault() {
        if (window.screen.availWidth >= 1023) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflowY = 'visible';
        }
    }

    window.addEventListener('resize', resetToDefault);

    }, []);
  
    return (
    <>
        <WrapperMain>
            <header>
                <div className='header-logo-items'>
                    <Link to='/'><img src={Logo} alt='Lilies Logo'/></Link>
                    <h2>Lilies</h2>
                </div>
                <div className={isActive ? "header-links active" : "header-links"}>
                    <Link to='/'><h4 ref={homeLink}>Home</h4></Link>
                    <Link to='login'><h4 id='login-link'>Login</h4></Link>
                    <Link to='signup'><button className='signup-button'><h3 id='signup-link'>Sign Up</h3></button></Link>
                </div>
                <div className={isActive ? "hamburger active" : "hamburger"} onClick={toggleClass}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </header>
            <main>
                    <div className='main-top'>
                        <div className='main-top-left'>
                            <h1>Order <span className='colored-text'>food</span> anytime, anywhere</h1>
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
                            <h2 id = 'text-center-innerdiv-pasta'>Stir fry Pasta</h2>
                            <p>Stir fry pasta yada yada yada <br/> because of Sesan</p>
                        </div>
                        <div className='text-center-innerdiv'>
                            <img src={HomeMainMid2} alt='Food'/>
                            <h2 id='text-center-innerdiv-meatballs'>Meat Balls</h2>
                            <p>Stir fry pasta yada yada yada <br/> because of Sesan</p>
                        </div>
                        <div className='text-center-innerdiv'>
                            <img src={HomeMainMid3} alt='Food'/>
                            <h2 id='text-center-innerdiv-pasta'>Burger Meal</h2>
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
                        <img src={PlaystoreFooter} alt=''download button className='img-margin-bottom'/>  
                        <img src={IOSFooter} alt=''download button className='img-margin-bottom'/>   
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