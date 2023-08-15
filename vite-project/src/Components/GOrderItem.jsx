
import { CART_ACTIONS } from '../App';
import CartItem from '../Types/CartItem';
import classes from './GOrderItem.module.css'


function GOrderItem({ itemObject, updateTotal}) {

    

    function addItem() {
        const inputValue = document.getElementById(`Id${itemObject.itemName}`).valueAsNumber;
        const orderItemObject = new CartItem(itemObject.itemName,itemObject.itemPrice,inputValue);
        updateTotal({type:CART_ACTIONS.UPDATE_CART_ITEM, payload:orderItemObject})
        inputElement.value = 1;
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
                    <input id={"Id"+itemObject.itemName} type="number" defaultValue='1' min='1' max='5' ></input>
                    <button onClick={addItem}>Add</button>
                </div>
            </div>
        </>

    )
}


export default GOrderItem;