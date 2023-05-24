import { Link } from "react-router-dom"
import { icons, theme } from "../../configs/app"
import { SideBarWrapper } from "./Index"
import { useContext } from "react"
import { Context } from "../../context/Context"
import { useState } from "react"
import { useEffect } from "react"

export const Sidebar = () => {
    const [qty, setQty] = useState();
    const { modal, setModal, foodContainer, setFoodContainer, items } = useContext(Context);
    const handleClick = (action) => {
        setFoodContainer(null);
        setModal(action);
    }

    useEffect(() => {
        setQty(items.map((item) => {
            return (
                sessionStorage.getItem(item)
            )
        }).reduce((accumulator, currentVal) => {
            return accumulator + parseFloat(currentVal)
        }, 0))
    }, [items])

    return (
        <SideBarWrapper pointerEvent={(foodContainer || modal) && "none"} backgroundColor={(foodContainer || modal) && theme.colors.disabled}>
            <div className='header-logo-items'>
                <Link to='/'><img src={icons.logo} alt='Food app logo' className="icon-margin" /></Link>
                <h2>Lilies</h2>
            </div>
            <div className={`side-bar-item ${(!foodContainer && !modal) && "sustain-depression"}`}>
                <img src={icons.homeIcon} alt='Home Icon' className="icon-margin" />
                <p>Dashboard</p>
            </div>
            <div className="side-bar-item">
                <img src={icons.profileIcon} alt='Profile Icon' className="icon-margin" />
                <p>Your Profile</p>
            </div>
            <div className="side-bar-item" onClick={() => handleClick("orders")}>
                <img src={icons.ordersIcon} alt='Orders Icon' className="icon-margin" />
                <p>Orders</p>
                <p className="orders-info">{items.length}</p>
            </div>
            <div className="side-bar-item" onClick={() => handleClick("cart")}>
                <img src={icons.cartIcon} alt='Cart Icon' className="icon-margin" />
                <p>Your Cart</p>
                <p className="cart-info">{qty}</p>
            </div>
        </SideBarWrapper >
    )
}