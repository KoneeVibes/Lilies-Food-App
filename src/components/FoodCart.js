import React, { useEffect, useRef } from 'react'
import Hamburger from '../assets/Dashboard/Hamburger.svg'
import Pasta from '../assets/Dashboard/Pasta.svg'
import ProteinBalls from '../assets/Dashboard/ProteinBalls.svg'
import EggMeal from '../assets/Dashboard/EggMeal.svg'
import Sandwich from '../assets/Dashboard/Sandwich.svg'
import Stew from '../assets/Dashboard/Stew.svg'


const FoodCart = ({ index, setitems, items }) => {

    const foodArray = [
        { name: 'Hamburger', image: <Hamburger />, introText: <p>This is the best Hamburger you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
        { name: 'Pasta', image: <Pasta />, introText: <p>This is the best Pasta you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
        { name: 'Protein Balls', image: <ProteinBalls />, introText: <p>This is the best Protein Ball you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
        { name: 'Egg Meal', image: <EggMeal />, introText: <p>This is the best Egg Meal you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
        { name: 'Sandwich', image: <Sandwich />, introText: <p>This is the best Sandwich you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
        { name: 'Stew', image: <Stew />, introText: <p>This is the best Stew you would ever taste</p>, price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.', maxQuantity: 10 },
    ];

    const foodBoxArray = [].concat(foodArray);
    foodBoxArray.unshift({ name: <h3>Hamburger</h3>, image: <Hamburger />, text: <p>This is the best Hamburger you would ever taste</p>, price: 1000, maxQuantity: 10, Qty: 1 })

    const cartButton = useRef(null);
    const addBut = useRef(null);
    const subBut = useRef(null);
    const count = useRef(null);
    items = parseInt(sessionStorage.getItem('items')) ? parseInt(sessionStorage.getItem('items')) : 0;
    let determinant = false;


    const addUpItems = () => {

        if (determinant) {
            setitems(items = items + 1);
            sessionStorage.setItem('items', items);

        }
        document.body.className = "";
        window.location.reload()

    }

    useEffect(() => {
        const addToCartButton = cartButton.current;
        const addButton = addBut.current;
        const subtractButton = subBut.current;


        function addQuantity() {

            if (index !== parseInt(document.body.getAttribute('class')) || parseInt(count.current.textContent) >= 10) return

            // eslint-disable-next-line
            determinant = true;
            let counter = parseInt(count.current.textContent);
            counter += 1;
            count.current.textContent = counter;
            sessionStorage.setItem(`pcs ${index}`, counter);
            let test = Object.keys(sessionStorage);
            test.map(item => console.log(item))

        }

        function subtractQuantity() {

            if (index !== parseInt(document.body.getAttribute('class')) || parseInt(count.current.textContent) <= 0) return

            determinant = true;
            let counter = parseInt(count.current.textContent);
            counter -= 1;
            count.current.textContent = counter
            sessionStorage.setItem(`pcs ${index}`, counter);

        }

        addButton.addEventListener('click', addQuantity);
        subtractButton.addEventListener('click', subtractQuantity);
        addToCartButton.addEventListener('click', addUpItems);
    })

    return (
        <div>

            <img src={foodBoxArray[index].image.type} alt='hamburger meal' width="230px" height="230px" />
            <h3 className="container-food-name">{foodBoxArray[index].name}</h3>
            <p className="container-food-text">{foodBoxArray[index].mainText}</p>
            <div className="item-container-action-info">
                <h3 className="xx">{`NGN${foodBoxArray[index].price}`}</h3>
                <h3 className="xx">10-20 Mins</h3>
                <h3 className="xx">{`${foodBoxArray[index].maxQuantity} Pcs Avail`}</h3>
            </div>
            <div className="item-container-buttons">
                <div className="add-subtract-buttons">
                    <p className="subtract-button margin-right" ref={subBut}>-</p>
                    <p ref={count}>{sessionStorage.getItem(`pcs ${index}`) ? parseInt(sessionStorage.getItem(`pcs ${index}`)) : 0}</p>
                    <p className="add-button margin-left" ref={addBut}>+</p>
                </div>
                <p className="cart-button" ref={cartButton}>Add to cart</p>
            </div>

        </div>
    )
}

export default FoodCart