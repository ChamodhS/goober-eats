function GCartItem({cartItemObject}){

    return (
        <>
            <div>
                <h3>ITEM:{cartItemObject.itemName}</h3>
                <p>ITEM PRICE:{cartItemObject.itemPrice}</p>
                <p>ITEM COUNT:{cartItemObject.itemCount}</p>

                <button>-</button>
                <button>+</button>
                
            </div>   
        </>
    )
}



export default GCartItem;