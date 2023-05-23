import { useContext, useEffect, useState } from "react"
import { foodInfo, theme, icons } from "../../configs/app"
import { Context } from "../../context/Context"
import FoodCart from "../Foodcart/FoodCart"
import FoodContainer from "../FoodContainer"
import { DashboardWrapper } from "./Index"
import OrdersModal from "../OrdersModal/OrdersModal"
import CheckOutModal from "../CheckOutModal"
import MakePaymentModal from "../MakePaymentModal"
import { Column, Row } from "../Flex"
import { Avatar } from "../Avatar/Index"
import { H4, Text } from "../Typography"

export const Dashboard = () => {

    const { modal, foodContainer } = useContext(Context)
    const [username, setUsername] = useState()

    useEffect(() => {
        setUsername(JSON.parse(sessionStorage.getItem('user')).name);
    }, []);

    return (
        <div style={{ height: "inherit" }} >
            <DashboardWrapper
                padding={"4rem 2"}
                backgroundColor={(foodContainer || modal) ? theme.colors.disabled : theme.colors.white}
                pointerEvents={(foodContainer || modal) && "none"}
                gap={4}
                flexWrap={"nowrap"}
            >
                <Row justifyContent={"space-between"} flexWrap={"wrap-reverse"}>
                    <Column>
                        <H4 fontSize={"1.4375rem"}>{`Good morning, ${username}!`}</H4>
                        <Text
                            fontSize={"0.875rem"}
                            fontWeight={theme.font.weight.light}
                            fontColor={theme.colors.offBlack}
                        >
                            What delicious meal are you craving today?
                        </Text>
                    </Column>
                    <Avatar
                        src={icons.profilePhoto}
                        alt='userphoto'
                        marginLeft={"0"}
                        marginRight={"0"}
                    />
                </Row>
                <Row gap={"0"}>
                    {foodInfo.map((food, i) => {
                        return (
                            <FoodContainer
                                key={i} image={food.image}
                                name={food.name} text={food.introText} price={`N${food.price}`}
                            />
                        )
                    })}
                </Row>
            </DashboardWrapper>
            {
                foodContainer && <FoodCart />
            }
            {
                modal === "orders" && (
                    <OrdersModal />
                )
            }

            {
                modal === "cart" && (
                    <CheckOutModal />
                )
            }

            {
                modal === "payment" && (
                    <MakePaymentModal />
                )
            }
        </div >
    )
}