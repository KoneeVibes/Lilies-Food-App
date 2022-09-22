import React, { useEffect } from 'react'
import styled from 'styled-components'
import ActionButton from './ActionButton'


const ModalStyler = styled.div`

    input {
        width: 456px;
        height: 71px;
        margin-bottom: 59px;
        padding: 0 2em;
        background: rgba(255, 255, 255, 0.83);
        border: 1px solid rgba(251, 221, 187, 0.51);
        border-radius: 5px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 33px;
    }

    h3{
        font-family: Poppins;
        font-size: 17px;
        font-weight: 600;
        text-align: left;
        margin-left: 0.6em;
    }

    .card-pin{
        margin-bottom: 29px;
    }

    .card-number{
        margin-top: 30px;
    }

`

const MakePaymentModal = () => {

    useEffect(() => {
 
        const makePaymentButton = document.querySelector('.make-payment-button');
        const makePaymentModal = document.querySelector('.make-payment-modal')
        
        function handlePaymentAction(e){
            e.preventDefault()
            makePaymentModal.innerHTML = "To be continued"
        }

        makePaymentButton.addEventListener('click', handlePaymentAction)
    })

  return (
    <ModalStyler className='test'>
        <form>
              <h3>Checkout</h3>
              <input placeholder='Card Number' className='card-number' required></input><br></br>
              <input placeholder='Exp Date' required></input><br></br>
              <input placeholder='CVV/CVV2' required></input><br></br>
              <input placeholder='Card Pin' className='card-pin' required></input><br></br>
              <ActionButton text={'Make Payment'} className={'make-payment-button'}/>
        </form>
    </ModalStyler>
  )
}

export default MakePaymentModal