import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button } from './Buttons/Index'
import { theme } from '../configs/app'
import { Context } from '../context/Context'
import { useForm } from 'react-hook-form'

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

    p{
        font-family: Poppins;
        font-size: 0.875rem;
        font-weight: ${theme.font.weight.light};
        line-height: 33px;
        color:${theme.colors.red};
        padding:0 0 2em 2em;
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

    const { setModal } = useContext(Context);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            cardNumber: "",
            expiryDate: "",
            cvv: "",
            cardPin: "",
        },
    });

    const handlePaymentAction = () => {
        setModal(null);
    }

    return (
        <ModalStyler fullWidth onSubmit={handleSubmit(handlePaymentAction)} >
            <legend>Checkout</legend>
            <input
                {...register("cardNumber", {
                    required: "Please enter your thirteen-digit card number.",
                    minLength: {
                        value: 13,
                        message: "Please enter your thirteen-digit card number.",
                    },
                    maxLength: {
                        value: 13,
                        message: "Please enter your thirteen-digit card number."
                    }
                })}
                type='number'
                placeholder='Card Number'
            />
            {errors.cardNumber && <p>{errors.cardNumber.message}</p>}

            <input
                {...register("expiryDate", { required: "Please select your card expiry date." })}
                type='date'
                placeholder='Exp Date'
            />
            {errors.expiryDate && <p>{errors.expiryDate.message}</p>}

            <input
                {...register("cvv", {
                    required: "Please enter your three-digit CVV.",
                    minLength: {
                        value: 3,
                        message: "Please enter your three-digit CVV.",
                    },
                    maxLength: {
                        value: 3,
                        message: "Please enter your three-digit CVV.",
                    }
                })}
                type='number'
                placeholder='CVV/CVV2'
            />
            {errors.cvv && <p>{errors.cvv.message}</p>}

            <input
                {...register("cardPin", {
                    required: "Please enter your four-digit PIN.",
                    minLength: {
                        value: 4,
                        message: "Please enter your four-digit PIN."
                    },
                    maxLength: {
                        value: 4,
                        message: "Please enter your four-digit PIN."
                    }
                })}
                type='number'
                placeholder='Card Pin'
            />
            {errors.cardPin && <p>{errors.cardPin.message}</p>}

            <Button
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