import { useContext } from "react";
import GCartItem from "./GCartItem";
import { DispatchContext } from "../App";
import classes from './GCartPreview.module.css'

function GCartPreview({ cartState, children, }) {

    const dispatch = useContext(DispatchContext)
    return (
        <>


            <div className={classes['preview-cart-modal']}>

                <div>
                    {cartState.foodItems.map(

                        (x) => <GCartItem cartItemObject={x} onUpdateCart={dispatch}></GCartItem>

                    )}
                </div>

                <div style={{ display: 'flexbox', flexDirection: "row", justifyContent: 'space-between' }}>
                    <div>Total Amount:</div>
                    <div>{cartState.totalAmount}</div>
                </div>

                <div style={{ display: 'flexbox', flexDirection: "row-reverse" }}>
                    <button>cancel</button>
                    <button>order</button>
                </div>

            </div>

        </>


    );
}

export default GCartPreview;