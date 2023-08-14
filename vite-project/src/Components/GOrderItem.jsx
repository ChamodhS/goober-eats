import { useState } from "react";
import classes from './GOrderItem.module.css'

function GOrderItem({ itemObject}) {

    const [itemCount, updateItemCount] = useState(0);

    function addItem() {
        console.log("order item incremented by 1");

        updateItemCount(prevValue => prevValue)
    }

    return (
        <>
            <div className={classes['order-item']}> 
                <ul>
                    <li>{itemObject.itemName}</li>
                    <li> <i>{itemObject.itemDescription}</i></li>
                    <li>{`$ ${itemObject.itemPrice}`}</li>
                </ul>
                <div>
                    <input type="number" placeholder="0" min="0" max="5" ></input>
                    <button onClick={addItem}>Add</button>
                </div>
            </div>
        </>

    )
}


export default GOrderItem;