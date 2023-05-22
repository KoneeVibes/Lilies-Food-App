import React, { useContext, useEffect, useState } from 'react'
import { getValue } from '../CheckOutModal'
import { foodInfo, theme } from '../../configs/app'
import { H4 } from '../Typography'
import { Avatar } from '../Avatar/Index'
import { Column } from '../Flex'
import { ModalStyler } from './Index'
import { Button } from '../Buttons/Index'
import { Context } from '../../context/Context'

const OrdersModal = () => {

    const [items, setItems] = useState([]);
    const { setModal } = useContext(Context);

    useEffect(() => {
        setItems(Object.keys(sessionStorage).filter((key) => {
            return (
                key !== "user"
            )
        }))
    }, []);

    const handleClick = (action, key) => {
        switch (action) {
            case "closeModal":
                return setModal(null)
            case "removeItem":
                sessionStorage.removeItem(key)
                return setItems(Object.keys(sessionStorage).filter((key) => {
                    return (
                        key !== "user"
                    )
                }))
            default:
                return null
        }
    }

    return (
        <ModalStyler backgroundColor={theme.colors.white} position={"fixed"} right={"0"} top={"0"} bottom={"0"} width={"50%"} padding={"8rem 4rem"} overflow={"scroll"}>
            <Button
                fontColor={theme.colors.red}
                border={`solid ${theme.colors.green}`}
                backgroundColor={"#FFFFFF"}
                width={"50px"}
                onClick={() => handleClick("closeModal")}
                type="button"
            >
                X
            </Button>
            <H4 fontSize={theme.font.sizes.ll} >Your Orders</H4>
            <table>
                <thead>
                    <tr>
                        <th className='item-column'>Item</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items?.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td className='image-cell'>
                                        <Avatar
                                            marginLeft={"0"} marginRight={"0"}
                                            src={getValue(foodInfo, "name", item, "image")} alt='food'
                                        />
                                        <Column>
                                            <H4 fontSize={theme.font.sizes.ll} >{item}</H4>
                                            <Button
                                                fontSize={theme.font.sizes.md}
                                                fontColor={theme.colors.red}
                                                padding={"0"}
                                                onClick={() => handleClick("removeItem", item)}
                                                type="button"
                                            >
                                                Remove
                                            </Button>
                                        </Column>
                                    </td>
                                    <td className='qty'>{sessionStorage.getItem(item)}</td>
                                    <td className='price'>{getValue(foodInfo, "name", item, "price")}</td>
                                    <td className='status'></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </ModalStyler>
    )
}

export default OrdersModal