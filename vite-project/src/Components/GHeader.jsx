import classes from './GHeader.module.css'


function GHeader({totalItems})  {

    return (<>
    <div className={classes['header']}>
        <div className={classes['ge-font'] }>ReactMeals</div>
        <div  className={classes['ge-font'] }  ><button> {`cart`}</button>
                <p>{totalItems.totalCount}</p>
                <p>{`total $${totalItems.totalAmount} `}</p>
        </div>

    </div>
    </>)
}


export default GHeader;
