import { createContext, useContext, useEffect, useReducer, useState } from 'react'

import GHeader from './Components/GHeader'
import GIntroCard from './Components/GIntroCard'
import GItemContainer from './Components/GItemContainer'
import GOrderItem from './Components/GOrderItem'
import GCartPreview from './Components/GCartPreview'
import CartItem from './Types/CartItem'
import GAddOrderItem from './Components/GAddOrderItem'



export const CART_ACTIONS = {
  UPDATE_CART_ITEM: "update-cart-item",
  INCREMENT_ITEM: 'increment-cart-item',
  DECREMENT_ITEM: 'decrement-cart-item'
}


export const DispatchContext = createContext();

function App() {

  useEffect(() => {
    async function getOrderItems() {
      const response = await fetch('http://localhost:8080/order-items', { type: "GET" }) // recieves in JSON
      const object = await response.json()// converts HTTP call to json object 
      console.log(object);
    }

    getOrderItems();
  }

    , []);

  const foodItems = [
    {
      itemName: 'Sushi',
      itemDescription: "finest authentic japanese salmon wrapped in a rice enclosure",
      itemPrice: 2
    },

    {
      itemName: 'Schnitzel',
      itemDescription: "A european delicacy all the way from Hamburg",
      itemPrice: 4
    },
    {
      itemName: 'Classic CheesBurger',
      itemDescription: "eagle screech, military industrial complex inspired freedom burger, raaaaaaah",
      itemPrice: 69
    }
  ]

  const defaultCartState = {
    foodItems: [],
    totalAmount: 0,
    totalCount: 0
  }

  const [cartState, dispatcher] = useReducer(reducer, defaultCartState)

  function reducer(cartState, action) {

    switch (action.type) {
      case (CART_ACTIONS.UPDATE_CART_ITEM): {

        const updatedCartObject = updateCart(cartState, action.payload)
        return ({
          foodItems: updatedCartObject.foodItems,
          totalAmount: updatedCartObject.totalAmount,
          totalCount: updatedCartObject.totalCount,
        })

      }

      case (CART_ACTIONS.INCREMENT_ITEM): {

        const updatedCartObject = incrementCartItem(cartState, action.payload)
        return ({
          foodItems: updatedCartObject.foodItems,
          totalAmount: updatedCartObject.totalAmount,
          totalCount: updatedCartObject.totalCount,
        })
      }


      case (CART_ACTIONS.DECREMENT_ITEM): {

        const updatedCartObject = decrementCartItem(cartState, action.payload)
        return ({
          foodItems: updatedCartObject.foodItems,
          totalAmount: updatedCartObject.totalAmount,
          totalCount: updatedCartObject.totalCount,
        })

      }

      default:
        return cartState;
    }
  }




  function incrementCartItem(cartState, orderItem) {
    const updatedCartArray = [...cartState.foodItems]
    const foodItemIndex = updatedCartArray.findIndex(x => x.itemName === orderItem.itemName);

    if (updatedCartArray[foodItemIndex]) {
      updatedCartArray[foodItemIndex] = {
        ...updatedCartArray[foodItemIndex],
        itemCount: updatedCartArray[foodItemIndex].itemCount + 1
      };
    }

    const updatedArrayObject = {
      foodItems: updatedCartArray,
      totalAmount: cartState.totalAmount + orderItem.itemPrice,
      totalCount: cartState.totalCount + 1
    }

    return updatedArrayObject;
  }

  function decrementCartItem(cartState, orderItem) {
    let updatedCartArray = [...cartState.foodItems]
    const foodItemIndex = updatedCartArray.findIndex(x => x.itemName === orderItem.itemName);

    if (updatedCartArray[foodItemIndex]) {
      updatedCartArray[foodItemIndex] = {
        ...updatedCartArray[foodItemIndex],
        itemCount: updatedCartArray[foodItemIndex].itemCount - 1
      };

      if (updatedCartArray[foodItemIndex].itemCount == 0) {
        updatedCartArray = [...updatedCartArray.filter(x => x.itemCount !== 0)];
        console.log(updatedCartArray);

      }
    }

    const updatedArrayObject = {
      foodItems: updatedCartArray,
      totalAmount: cartState.totalAmount - orderItem.itemPrice,
      totalCount: cartState.totalCount - 1
    }

    return updatedArrayObject;
  }




  function updateCart(cartState, orderItem) {

    const updatedCartArray = [...cartState.foodItems]
    const foodItemIndex = updatedCartArray.findIndex(x => x.itemName === orderItem.itemName);

    // if (updatedCartArray[foodItemIndex]) {
    //   updatedCartArray[foodItemIndex].itemCount = updatedCartArray[foodItemIndex].itemCount + orderItem.itemCount
    // }
    // the commented snippet above is incorrect 

    if (updatedCartArray[foodItemIndex]) {
      updatedCartArray[foodItemIndex] = {
        ...updatedCartArray[foodItemIndex],
        itemCount: updatedCartArray[foodItemIndex].itemCount + orderItem.itemCount,
      };
    }

    else {
      updatedCartArray.push(new CartItem(orderItem.itemName, orderItem.itemPrice, orderItem.itemCount));
    }

    const updatedCartObject = {
      foodItems: updatedCartArray,
      totalAmount: cartState.totalAmount + orderItem.itemPrice * orderItem.itemCount,
      totalCount: cartState.totalCount + orderItem.itemCount
    }
    return updatedCartObject;
  }

  return (
    <>
      {<><DispatchContext.Provider value={dispatcher}>
        <GHeader cartState={cartState}></GHeader>
        <GIntroCard></GIntroCard>
        <GItemContainer>
          {foodItems.map(
            (itemData) => <GOrderItem itemObject={itemData} updateTotal={dispatcher}></GOrderItem>
          )}
        </GItemContainer>
        <GCartPreview cartState={cartState}></GCartPreview>
      </DispatchContext.Provider><GAddOrderItem></GAddOrderItem></>
      }
    </>
  )
}

export default App
