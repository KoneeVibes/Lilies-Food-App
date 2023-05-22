import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button } from './Buttons/Index'
import { theme } from '../configs/app'
import { Context } from '../context/Context'

const ModalStyler = styled.form`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 38%;
    padding: 8rem 4rem;
    overflow: scroll;
    background: ${theme.colors.white};
    z-index: 100;

    input {
        width: fill-available;
        padding: 2em;
        background: rgba(255, 255, 255, 0.83);
        border: 1px solid rgba(251, 221, 187, 0.51);
        border-radius: 5px;
        font-family: Poppins;
        font-size: 0.875rem;
        font-weight: ${theme.font.weight.light};
        line-height: 33px;
        margin-bottom: 2rem;
    }

    legend{
        font-family: Poppins;
        font-size: ${theme.font.sizes.ll};
        font-weight: ${theme.font.weight.medium};
        text-align: left;
        color: ${theme.colors.green};
        margin-bottom: 2rem;
    }

    @media (max-width: 1024px){
        width: fill-available;
    }

    @media (max-width: 500px){
        padding: 2rem 1rem;
    }
`

const MakePaymentModal = () => {

    const { setModal } = useContext(Context)

    const handlePaymentAction = (e) => {
        e.preventDefault();
        setModal(null);
    }

    return (
        <ModalStyler fullWidth>
            <legend>Checkout</legend>
            <input placeholder='Card Number'></input>
            <input placeholder='Exp Date'></input>
            <input placeholder='CVV/CVV2' ></input>
            <input placeholder='Card Pin'></input>
            <Button
                onClick={(e) => handlePaymentAction(e)}
                width={"100%"}
                textAlign={"center"}
                fontColor={theme.colors.peach}
                fontWeight={theme.font.weight.medium}
                backgroundColor={theme.colors.green}
                type='submit'
            >
                Make Payment
            </Button>
        </ModalStyler >
    )
}

export default MakePaymentModal