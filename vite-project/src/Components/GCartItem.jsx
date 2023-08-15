function GCartItem({cartItemObject}){

    return (
        <>
            <div>
                <h3>{cartItemObject.itemName}</h3>
                <p>{cartItemObject.itemPrice}</p>
                <p>{cartItemObject.itemCount}</p>

                <button>-</button>
                <button>+</button>
                
            </div>   
        </>
    )
}



export default GCartItem;