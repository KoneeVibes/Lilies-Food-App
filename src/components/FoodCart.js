import React, { useContext, useReducer } from 'react'
import { Context } from '../context/Context'
import { foodInfo } from '../configs/app'


const FoodCart = ({ index, setitems, items }) => {

    // const cartButton = useRef(null);
    // const addBut = useRef(null);
    // const subBut = useRef(null);
    // const count = useRef(null);
    // items = parseInt(sessionStorage.getItem('items')) ? parseInt(sessionStorage.getItem('items')) : 0;
    // let determinant = false;


    // const addUpItems = () => {

    //     if (determinant) {

    //         // get all keys from session storage

    //         let pcs = Object.keys(sessionStorage)

    //             // filter out keys that don't include 'pcs'
    //             .filter(key => key.includes('pcs'));

    //         // get the values of the keys that include 'pcs'

    //         let values = pcs.map(i => parseInt(`${sessionStorage.getItem(i)}`))

    //         // sum up the values and update the icon box

    //         setitems(items = values.reduce((a, b) => {
    //             return a + b;
    //         }, 0));

    //         sessionStorage.setItem('items', items);

    //     }
    //     document.body.className = "";
    //     window.location.reload()

    // }

    // useEffect(() => {
    //     const addToCartButton = cartButton.current;
    //     const addButton = addBut.current;
    //     const subtractButton = subBut.current;


    //     function addQuantity() {

    //         // set two conditions to allow only the selected item quantity to be updated and only updated if it is greater than or equal to max-quantity

    //         if (index !== parseInt(document.body.getAttribute('class')) || parseInt(count.current.textContent) >= foodBoxArray[index].maxQuantity) return

    //         // set flag to check if the user has clicked on the button
    //         // eslint-disable-next-line
    //         determinant = true;
    //         let counter = parseInt(count.current.textContent);
    //         counter += 1;
    //         count.current.textContent = counter;

    //         // this would update all the item quantities if the first condition is not set
    //         sessionStorage.setItem(`${index} pcs`, counter);

    //     }

    //     function subtractQuantity() {

    //         // set two conditions to allow only the selected item quantity to be updated and only updated if it is less than or equal to zero

    //         if (index !== parseInt(document.body.getAttribute('class')) || parseInt(count.current.textContent) <= 0) return

    //         // set flag to check if the user has clicked on the button
    //         determinant = true;
    //         let counter = parseInt(count.current.textContent);
    //         counter -= 1;
    //         count.current.textContent = counter

    //         // this would update all the item quantities if the first condition is not set
    //         sessionStorage.setItem(`${index} pcs`, counter);

    //     }

    //     addButton.addEventListener('click', addQuantity);
    //     subtractButton.addEventListener('click', subtractQuantity);
    //     addToCartButton.addEventListener('click', addUpItems);
    // })



    const { foodContainer, setFoodContainer } = useContext(Context)
    const selectedFood = foodInfo.find((food) => food.name === foodContainer)

    const updateQuantity = (quantity, action) => {
        switch (action) {
            case "addition":
                let qty = parseInt(sessionStorage.getItem(`${selectedFood.name}`))
                qty = qty + 1
                sessionStorage.setItem(`${selectedFood.name}`, qty)
                return qty
            case "subtraction":
                if (parseInt(sessionStorage.getItem(`${selectedFood.name}`)) === 0) {
                    return quantity
                } else {
                    let qty = parseInt(sessionStorage.getItem(`${selectedFood.name}`))
                    qty = qty - 1
                    sessionStorage.setItem(`${selectedFood.name}`, qty)
                    return qty
                }
            default:
                return quantity
        }
    }
    const [quantity, dispatch] = useReducer(updateQuantity, 0)


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
                        {/* <div className="add-subtract-buttons">
                            <p className="subtract-button margin-right" ref={subBut}>-</p>
                            <p ref={count}>{sessionStorage.getItem(`${index} pcs`) ? parseInt(sessionStorage.getItem(`${index} pcs`)) : 0}</p>
                            <p className="add-button margin-left" ref={addBut}>+</p>
                        </div> */}
                        {/* <p className="cart-button" ref={cartButton}>Add to cart</p> */}
                        <div className="add-subtract-buttons">
                            <p className="subtract-button margin-right" onClick={() => dispatch("subtraction")}>-</p>
                            {/* <p>{sessionStorage.getItem(`${selectedFood.name}`) ? parseInt(sessionStorage.getItem(`${selectedFood.name}`)) : 0}</p> */}
                            <p>{quantity}</p>
                            <p className="add-button margin-left" onClick={() => dispatch("addition")}>+</p>
                        </div>
                        <p className="cart-button" onClick={() => setFoodContainer(null)}>Add to cart</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FoodCart