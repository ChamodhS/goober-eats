import classes from './GHeader.module.css'


function GHeader()  {

    return (<>
    <div className={classes['header']}>
        <div className={classes['ge-font'] }>ReactMeals</div>
        <div  className={classes['ge-font'] }  ><button> {`Your cart ${0}`}</button></div>

    </div>
    </>)
}


export default GHeader;
