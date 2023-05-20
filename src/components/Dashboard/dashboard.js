import { useContext } from "react"
import { foodInfo } from "../../configs/app"
import { Context } from "../../context/Context"
import FoodCart from "../FoodCart"
import FoodContainer from "../FoodContainer"
import { DashboardWrapper } from "./Index"

export const Dashboard = () => {

    const { navLink } = useContext(Context)

    return (
        <div>
            <DashboardWrapper>
                {foodInfo.map((food, i) => {
                    return (
                        <FoodContainer key={i} image={food.image} name={food.name} text={food.introText} price={`N${food.price}`} />
                    )
                })}
            </DashboardWrapper>
            <FoodCart />
            {
                navLink === "orders" && (
                    <div>This is the orders column</div>
                )
            }

            {
                navLink === "cart" && (
                    <div>This is the cart column</div>
                )
            }
        </div>
    )
}