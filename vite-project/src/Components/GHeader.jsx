import GCartButton from './GCartButton';
import classes from './GHeader.module.css'


function GHeader({cartState})  {

    return (<>

        <header>
            <h1>ReactMeals</h1>
            <GCartButton></GCartButton>
        </header>
        <div>
            {/* <img src={mealsImage} alt='table full of food'> </img> */}
        </div>
    </>)
}


export default GHeader;
