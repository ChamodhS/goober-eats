import classes from './GHeader.module.css'


function GHeader({cartState})  {

    return (<>
    <div className={classes['header']}>
        <div className={classes['ge-font'] }>ReactMeals</div>
        <div  className={classes['ge-font'] }  ><button> {`cart`}</button>
                <p>{cartState.totalCount}</p>
                <p>{`total $${cartState.totalAmount} `}</p>
        </div>

    </div>
    </>)
}


export default GHeader;
