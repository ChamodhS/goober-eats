import classes from './GIntroCard.module.css'

function GIntroCard
 () {

    return (
        <section  className={classes['summary']}>
            <h2>Delicious Food, Delivered To You!!</h2>
            <p>choose from a broad selection of your favorite meals and enjoy a
                 delicious lunch or dinner at home</p>
            <p>All our meals are cooked with high quality ingredients,from the caring hands of the best chef</p>
        </section>
    );
}

export default GIntroCard;