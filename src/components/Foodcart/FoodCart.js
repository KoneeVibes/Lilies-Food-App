import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import { foodInfo, theme } from '../../configs/app'
import { CartRow, CartAvatar, FoodCard } from './Index'
import { H4, Text } from '../Typography'
import { Column } from '../Flex'
import { Button } from '../Buttons/Index'

const FoodCart = () => {

    const { foodContainer, setFoodContainer, setItems } = useContext(Context)
    const selectedFood = foodInfo.find((food) => food.name === foodContainer)
    const [quantity, setQuantity] = useState()

    useEffect(() => {
        if (!sessionStorage.getItem(`${selectedFood.name}`)) {
            setQuantity(0)
        } else {
            setQuantity(sessionStorage.getItem(`${selectedFood.name}`));
        }
    }, [selectedFood.name])

    const updateQuantity = (action) => {
        const qty = parseInt(quantity)
        switch (action) {
            case "addition":
                setQuantity(qty + 1);
                return sessionStorage.setItem(`${selectedFood.name}`, qty + 1);
            case "subtraction":
                if (qty === 0) return
                setQuantity(qty - 1);
                return sessionStorage.setItem(`${selectedFood.name}`, qty - 1);
            case "addToCart":
                setFoodContainer(null)
                return setItems(Object.keys(sessionStorage).filter((key) => {
                    return (
                        key !== "user"
                    )
                }))
            default:
                return qty
        }
    }

    return (
        <>
            {selectedFood && (
                <FoodCard backgroundColor={theme.colors.white} position={"fixed"} right={"0"} top={"0"} bottom={"0"} width={"36%"} padding={"8rem 4rem"} overflow={"scroll"} zIndex={"100"} fullWidth >
                    <Column >
                        <CartAvatar src={selectedFood.image} alt='hamburger meal' width={"250px"} height={"250px"} resWidth />
                        <H4
                            fontSize={theme.font.sizes.ll}
                            fontColor={theme.colors.green}
                            textAlign={"center"}
                        >
                            {selectedFood.name}
                        </H4>
                        <Text
                            fontWeight={400}
                            fontSize={theme.font.sizes.ss}
                            textAlign={"center"}
                        >
                            {selectedFood.mainText}
                        </Text>
                        <CartRow alignItems={"center"} justifyContent={"space-between"} padding={"2em 0"} justCenter>
                            <H4
                                fontSize={theme.font.sizes.ll}
                                fontColor={theme.colors.green}>
                                {`NGN${selectedFood.price}`}
                            </H4>
                            <H4 fontSize={theme.font.sizes.ll} fontColor={theme.colors.green}>
                                10-20 Mins
                            </H4>
                            <H4
                                fontSize={theme.font.sizes.ll}
                                fontColor={theme.colors.green}>
                                {`${selectedFood.maxQuantity} Pcs Avail`}
                            </H4>
                        </CartRow>
                        <CartRow justifyContent={"space-between"} toColumn toCenter>
                            <CartRow alignItems={"center"} toColumn>
                                <Button
                                    fontSize={theme.font.sizes.xxl}
                                    fontColor={theme.colors.green}
                                    backgroundColor={theme.colors.peach}
                                    onClick={() => updateQuantity("subtraction")}
                                    type="button"
                                >
                                    -
                                </Button>

                                <H4 fontSize={theme.font.sizes.xl} fontColor={theme.colors.green}>
                                    {quantity}
                                </H4>
                                <Button
                                    fontSize={theme.font.sizes.xxl}
                                    fontColor={theme.colors.green}
                                    backgroundColor={theme.colors.peach}
                                    onClick={() => updateQuantity("addition")}
                                    type="button"
                                >
                                    +
                                </Button>
                            </CartRow>
                            <Button
                                fontWeight={theme.font.weight.medium}
                                fontColor={theme.colors.white}
                                backgroundColor={theme.colors.green}
                                onClick={() => updateQuantity("addToCart")}
                                type="button"
                            >
                                Add to cart
                            </Button>
                        </CartRow>
                    </Column >
                </FoodCard>
            )
            }
        </>
    )
}

export default FoodCart