import { useState } from "react";
import travelPlansData from '../../src/data/travel-plans.json'
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {

  // const [ travelPlans, setTravelPlans ] = useState((travelPlansData))
  const [ travelPlans, setTravelPlans ] = useState(() => {
    let originalPlans = []
    for (let i = 0; i < travelPlansData.length; i++) {
      originalPlans.push(travelPlansData[i])
    }
    return originalPlans
  })

  /*
  const [ favorites, setFavorites ] = useState([]) // check this empty array !!
  */

  // const handleDelete = (id) => {
  //   const updatedTravelPlans = travelPlans.filter(plan => plan.id !== id)
  //   setTravelPlans(updatedTravelPlans)
  //   setFavorites(favorites.filter(plan => plan.id !== id)) // => removes deleted from favorites
  // }

  const handleDelete = (id) => {

    let updatedTravelPlans = []

    for (let i = 0; i < travelPlans.length; i++) {
      if (travelPlans[i].id !== id)
        updatedTravelPlans.push(travelPlans[i]) // array cloned and modified by handleDelete
    }

    setTravelPlans(updatedTravelPlans) // new list updated
  }



  /*
  const addToFavorites = (plan) => {
    if (!favorites.some(fav => fav.ide === plan.id))
      setFavorites([...favorites, plan])
  }
  */

  return (

    <div className="travel-list">
        {travelPlans.map(plan => (
          <TravelPlanCard key={plan.id} plan={plan} onDelete={() => handleDelete(plan.id)} />
        ))}
    </div>

    )
}

export default TravelList