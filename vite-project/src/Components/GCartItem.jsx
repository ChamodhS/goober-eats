import { CART_ACTIONS } from "../App";
import classes from './GCartItem.module.css'

function GCartItem({ cartItemObject, onUpdateCart }) {

    const cartItem = {
        itemName: cartItemObject.itemName,
        itemPrice: cartItemObject.itemPrice
    }

    function incrementCartItem() {
        console.log("click");
        onUpdateCart({ type: CART_ACTIONS.INCREMENT_ITEM, payload:cartItem })
    }

    function decrementCartItem() {
            onUpdateCart({type:CART_ACTIONS.DECREMENT_ITEM, payload:cartItem})
    }

    return (
        <>
            <div className={classes['cart-item']}>
                <h3>ITEM:{cartItemObject.itemName}</h3>
                <p>ITEM PRICE:{cartItemObject.itemPrice}</p>
                <p>ITEM COUNT:{cartItemObject.itemCount}</p>

                <button onClick={decrementCartItem} value={0}>-</button>
                <button onClick={incrementCartItem} value={1}>+</button>
            </div  >
        </>
    )
}



export default GCartItem;