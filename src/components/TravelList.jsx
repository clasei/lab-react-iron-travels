import { useState } from "react";
import travelPlansData from '../../src/data/travel-plans.json'

function TravelList() {

  const [ travelPlans, setTravelPlans ] = useState(travelPlansData)
  // setTravelPlans not used, though useState is added following the exercise requirements

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
            <p>
              <>
                Price: €{eachTravel.totalCost}
              </>
            </p>
            
              <div className="tag-container">
                
                  {eachTravel.totalCost <= 350 && <span className="tag great-deal">Great Deal</span>}
                  {eachTravel.totalCost >= 1500 && <span className="tag premium">Premium</span>}
                  {eachTravel.allInclusive && <span className="tag all-inclusive">All-Inclusive</span>}
                
              </div>
            
          </div>

        </div>
      ))}
      
    </div>
  )
}

export default TravelList