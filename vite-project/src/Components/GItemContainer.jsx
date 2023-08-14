import classes from './GItemContainer.module.css'

function GItemContainer({children}){
    return (<>
        <div className={classes['order-item-container']}>
               {children}
        </div>
    </>);
}

export default GItemContainer;