import { useState } from "react";
import travelPlansData from '../../src/data/travel-plans.json'

function TravelList() {

  const [ travelPlans, setTravelPlans ] = useState(travelPlansData)

  return (
    <div className="travel-list">

      {travelPlans.map(eachTravel => (
        <div key={eachTravel.id} className="travel-item">

          <>
            <img src={eachTravel.image} style={{ width: '300px', height: 'auto' }} />
          </>
          <div className="travel-info">
            <h3>{eachTravel.destination} ({eachTravel.days} Days)</h3>
            <p>{eachTravel.description}</p>
            <p>Price: €{eachTravel.price}</p>
          </div>

        </div>
      ))}
      
    </div>
  )
}

export default TravelList