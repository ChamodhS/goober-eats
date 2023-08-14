import { createContext, useContext, useState } from 'react'

import GHeader from './Components/GHeader'
import GIntroCard from './Components/GIntroCard'
import GItemContainer from './Components/GItemContainer'
import GOrderItem from './Components/GOrderItem'
import GCartPreview from './Components/GCartPreview'


function App() {

  const [totalItems, setTotalItems] = useState({ totalCount: 0, totalAmount: 0 });

  function updateTotal(updatedItems) {
    setTotalItems({ ...totalItems, totalCount: totalItems.totalCount + updatedItems.totalCount, totalAmount: totalItems.totalAmount + updatedItems.totalAmount })
    console.log(totalItems);
  }

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


  return (
    <>
      <GHeader totalItems={totalItems}></GHeader>
      <GIntroCard></GIntroCard>
      <GItemContainer>
        {foodItems.map(
          (itemData) => <GOrderItem itemObject={itemData} updateTotal={updateTotal}></GOrderItem>
        )}
      </GItemContainer>

      <GCartPreview totalItems={totalItems}></GCartPreview>

    </>
  )
}

export default App
