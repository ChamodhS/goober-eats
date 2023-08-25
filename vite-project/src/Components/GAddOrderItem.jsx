import classes from "./GAddOrderItem.module.css"


function GAddOrderItem() {

    function onSubmit(event){
        event.preventDefault();

    }

    function onCLear(event){
        event.preventDefault();
    }

    return (
        <>
            <div className={classes["card"]}>
                <form>
                    <div className={classes["form-group"]}>
                        <label htmlFor="itemName">Enter Item Name</label>
                        <input type="text" id="itemName" className={classes["form-control"]} />
                    </div>

                    <div className={classes["form-group"]}>
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" className={classes["form-control"]} />
                    </div>

                    <div className={classes["form-group"]}>
                        <label htmlFor="itemDescription">Item Description</label>
                        <textarea id="itemDescription" className={classes["form-control"]} />
                    </div>

                    <div className={classes["form-button-group"]}>
                        <button className={classes["btn-submit"]} onClick={onSubmit}>Submit</button>
                        <button className={classes["btn-clear"]} onClick={onCLear}>Clear</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GAddOrderItem;