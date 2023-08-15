function GCartItem({cartItemObject}){


    return (
        <>
            <div>
                <h3>{cartItemObject.itemName}</h3>
                <>{cartItemObject.itemPrice}</>
                <>{cartItemObject.itemCount}</>

                <button>-</button>
                <button>+</button>
                
            </div>   
        </>
    )
}



export default GCartItem;