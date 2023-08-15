function GCartItem({cartItemObject}){

        function addByOne(){
            console.log('add')
        }

        function removeByOne(){
            console.log('remove');
        }

    return (
        <>
            <div>
                <h3>ITEM:{cartItemObject.itemName}</h3>
                <p>ITEM PRICE:{cartItemObject.itemPrice}</p>
                <p>ITEM COUNT:{cartItemObject.itemCount}</p>

                <button onClick={removeByOne}>-</button>
                <button onClick={addByOne}>+</button>
                
            </div  >   
        </>
    )
}



export default GCartItem;