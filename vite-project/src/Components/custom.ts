import CartItem from "../Types/CartItem";

function updateCart(cartArray,orderItem){

    const updatedCartArray = [...cartArray]
   const foodItemIndex =  updatedCartArray.findIndex(x => x.itemName === orderItem.itemName );

    if (cartArray[foodItemIndex]){
        updatedCartArray[foodItemIndex].itemCount = updatedCartArray[foodItemIndex].itemCount + orderItem.itemCount
    }

    else {
        updatedCartArray.push(new CartItem(orderItem.itemName,orderItem.itemPrice,orderItem.itemCount));
    }

    const updatedCartObject = {
        foodItems : updatedCartArray,
        totalAmount: cartArray.totalAmount + orderItem.itemPrice*orderItem.itemCount,
        totalCount : cartArray.totalCount + orderItem.itemCount
    }

    return updatedCartObject;
}