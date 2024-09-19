import { useState } from "react";
import travelPlansData from '../../src/data/travel-plans.json'
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {

  const [ travelPlans, setTravelPlans ] = useState(travelPlansData)

  const handleDelete = (id) => {
    const updatedTravelPlans = travelPlans.filter(plan => plan.id !== id)
    setTravelPlans(updatedTravelPlans)
  }

  return (
    <div className="travel-list">
            {travelPlans.map(plan => (
                <TravelPlanCard key={plan.id} plan={plan} onDelete={() => handleDelete(plan.id)} />
            ))}
        </div>
    )
}

export default TravelList