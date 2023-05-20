import { Link } from "react-router-dom"
import { icons } from "../../configs/app"
import { SideBarWrapper } from "./Index"
import { useContext } from "react"
import { Context } from "../../context/Context"

export const Sidebar = () => {
    const { setNavLink, setFoodContainer } = useContext(Context);
    const handleClick = (action) => {
        setFoodContainer(null);
        setNavLink(action);
    }

    return (
        <SideBarWrapper>
            <div className='header-logo-items'>
                <Link to='/'><img src={icons.logo} alt='Food app logo' className="icon-margin" /></Link>
                <h2>Lilies</h2>
            </div>
            <div className="side-bar-item dashboard sustain-depression">
                <img src={icons.homeIcon} alt='Home Icon' className="icon-margin" />
                <p>Dashboard</p>
            </div>
            <div className="side-bar-item">
                <img src={icons.profileIcon} alt='Profile Icon' className="icon-margin" />
                <p>Your Profile</p>
            </div>
            <div className="side-bar-item orders" onClick={() => handleClick("orders")}>
                <img src={icons.ordersIcon} alt='Orders Icon' className="icon-margin" />
                <p>Orders</p>
            </div>
            <div className="side-bar-item cart" onClick={() => handleClick("cart")}>
                <img src={icons.cartIcon} alt='Cart Icon' className="icon-margin" />
                <p>Your Cart</p>
            </div>
        </SideBarWrapper>
    )
}