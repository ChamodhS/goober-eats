function GCartPreview({totalItems,children}){

    return (
        <>


            <div style={{display:'flexbox',flexDirection:"column"}}>

                <div>
                    {children}
                </div>


                <div style={{display:'flexbox',flexDirection:"row", justifyContent:'space-between'}}>
                    <div>Total Amount:</div>  
                    <div>{totalItems.totalAmount}</div>
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