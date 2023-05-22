import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { foodInfo, theme } from '../configs/app'
import { Button } from './Buttons/Index'
import { Context } from '../context/Context'
import { Column, Row } from './Flex'
import { H4 } from './Typography'
import { Avatar } from './Avatar/Index'

const ModalStyler = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    padding: 8rem 4rem;
    overflow: scroll;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 100;

    table{
        width: 100%;
    }

    th{
        font-family: Poppins;
        font-size: ${theme.font.sizes.nm};
        font-weight: ${theme.font.weight.normal};
        line-height: 33px;
        text-align: center;
        color: ${theme.colors.offBlack};
    }

    .item-column{
        width: 50%;
        text-align: left;
    }

    .image-cell{
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    td{
        margin: 1rem 0;
    }

    .qty, .price, .sub-total{
        font-family: Poppins;
        font-size: ${theme.font.sizes.ll};
        font-weight: ${theme.font.weight.bold};
        line-height: 33px;
        text-align: center;
        color: ${theme.colors.green};
    }
`

export const getValue = (data, key, searchValue, value) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i][key] === searchValue) {
            return data[i][value]
        }
    }
    return null
}

const CheckOutModal = () => {

    const [items, setItems] = useState([]);
    const { setModal } = useContext(Context);

    useEffect(() => {
        setItems(Object.keys(sessionStorage).filter((key) => {
            return (
                key !== "user"
            )
        }))
    }, []);

    const computeSubTotal = (qty, price) => {
        return (
            qty * price
        )
    }

    const handleClick = (action, key) => {
        switch (action) {
            case "closeModal":
                return setModal(null);
            case "removeItem":
                sessionStorage.removeItem(key)
                return setItems(Object.keys(sessionStorage).filter((key) => {
                    return (
                        key !== "user"
                    )
                }));
            case "payment":
                return setModal(action)
            default:
                return null
        }
    }

    return (
        <ModalStyler>
            <Button
                fontColor={theme.colors.red}
                border={`solid ${theme.colors.green}`}
                backgroundColor={"#FFFFFF"}
                width={"50px"}
                onClick={() => handleClick("closeModal")}
                type='button'
            >
                X
            </Button>
            <H4
                fontColor={theme.colors.green}
                fontSize={theme.font.sizes.ll}
            >
                Your Cart
            </H4>
            <table>
                <thead>
                    <tr className='header'>
                        <th className='item-column'>Item</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th>Sub-total(N)</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items?.map((item, key) => {
                            return (
                                <tr key={key} className={item}>
                                    <td className='image-cell'>
                                        <Avatar
                                            src={getValue(foodInfo, "name", item, "image")}
                                            alt='food'
                                            marginLeft={"0"}
                                            marginRight={"0"}
                                        />
                                        <Column>
                                            <H4 fontSize={theme.font.sizes.ll}>{item}</H4>
                                            <Button
                                                fontSize={theme.font.sizes.md}
                                                fontColor={theme.colors.red}
                                                padding={"0"}
                                                onClick={() => handleClick("removeItem", item)}
                                                type='button'
                                            >
                                                Remove
                                            </Button>
                                        </Column>
                                    </td>
                                    <td className='qty'>{sessionStorage.getItem(item)}</td>
                                    <td className='price'>{getValue(foodInfo, "name", item, "price")}</td>
                                    <td className='sub-total'>
                                        {computeSubTotal(sessionStorage.getItem(item), getValue(foodInfo, "name", item, "price"))}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Row justifyContent={"center"} alignItems={"center"} padding={"2rem 0 0"}>
                <H4
                    fontSize={theme.font.sizes.ll}
                    fontColor={theme.colors.green}
                >
                    Total:
                </H4>
                <H4
                    fontSize={"1.3125rem"}
                    fontWeight={theme.font.weight.bold}
                    fontColor={theme.colors.green}
                >
                    0
                </H4>
            </Row>

            <Row justifyContent={"center"}>
                <Button
                    onClick={() => handleClick("payment")}
                    width={"80%"}
                    textAlign={"center"}
                    fontColor={theme.colors.peach}
                    fontWeight={theme.font.weight.medium}
                    backgroundColor={theme.colors.green}
                    type='button'
                >
                    Checkout
                </Button>
            </Row>
        </ModalStyler>
    )
}

export default CheckOutModal