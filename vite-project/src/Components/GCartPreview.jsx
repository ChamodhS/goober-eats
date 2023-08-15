import GCartItem from "./GCartItem";

function GCartPreview({cartState,children}){

    return (
        <>


            <div style={{display:'flexbox',flexDirection:"column"}}>

                <div>
                    {cartState.foodItems.map(

                        (x) => <GCartItem cartItemObject={x}></GCartItem>

                    )}
                </div>


                <div style={{display:'flexbox',flexDirection:"row", justifyContent:'space-between'}}>
                    <div>Total Amount:</div>  
                    <div>{cartState.totalAmount}</div>
                </div>
                    


                <div style={{display:'flexbox',flexDirection:"row-reverse"}}>
                    <button>cancel</button>
                    <button>order</button>
                </div>

            </div>
        
        </>


    );
}

export default GCartPreview;