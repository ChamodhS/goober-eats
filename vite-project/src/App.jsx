import { useState } from 'react'

import GHeader from './Components/GHeader'
import GIntroCard from './Components/GIntroCard'
import GItemContainer from './Components/GItemContainer'
import GOrderItem from './Components/GOrderItem'


function App() {

  const foodItems = [

      {
        itemName:'Sushi'  ,
        itemDescription:"finest authentic japanese salmon wrapped in a rice enclosure" ,
        itemPrice:2
      },

      {
        itemName:'Schnitzel'  ,
        itemDescription:"A european delicacy all the way from Hamburg" ,
        itemPrice:4.5
      },
      {
        itemName:'Classic CheesBurger'  ,
        itemDescription:"eagle screech, military industrial complex inspired freedom burger, raaaaaaah" ,
        itemPrice:69
      }
  ]


  return (
    <>
        <GHeader></GHeader>
        <GIntroCard></GIntroCard>
        <GItemContainer>
          {foodItems.map(
              (itemData) => <GOrderItem itemObject={itemData}></GOrderItem>
          )}
        </GItemContainer>
    </>
  )
}

export default App
