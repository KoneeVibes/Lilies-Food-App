import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { foodInfo } from '../configs/app'

const FoodCart = () => {

    const { foodContainer, setFoodContainer } = useContext(Context)
    const selectedFood = foodInfo.find((food) => food.name === foodContainer)
    const [quantity, setQuantity] = useState()

    useEffect(() => {
        if (!sessionStorage.getItem(`${selectedFood.name}`)){
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
            default:
                return qty
        }
    }

    return (
        <div>
            {selectedFood && (
                <div>
                    <img src={selectedFood.image} alt='hamburger meal' width="230px" height="230px" />
                    <h3 className="container-food-name">{selectedFood.name}</h3>
                    <p className="container-food-text">{selectedFood.mainText}</p>
                    <div className="item-container-action-info">
                        <h3 className="xx">{`NGN${selectedFood.price}`}</h3>
                        <h3 className="xx">10-20 Mins</h3>
                        <h3 className="xx">{`${selectedFood.maxQuantity} Pcs Avail`}</h3>
                    </div>
                    <div className="item-container-buttons">
                        <div className="add-subtract-buttons">
                            <p className="subtract-button margin-right" onClick={() => updateQuantity("subtraction")}>-</p>
                            <p>{quantity}</p>
                            <p className="add-button margin-left" onClick={() => updateQuantity("addition")}>+</p>
                        </div>
                        <p className="cart-button" onClick={() => setFoodContainer(null)}>Add to cart</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FoodCart