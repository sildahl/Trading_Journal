import React, { useEffect, useState } from 'react'
import './DashboardLine.css'
import DashboardLineDetails from './DashboardLineDetails'

function DashboardLine({trade}) {
  const [showDetails, setShowDetails] = useState(false)

  const handleShowDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <div className='trade-line' onClick={handleShowDetails}>
        <h5 style={{"width" : "6em"}}>{trade.pair}</h5>
        <h5 style={trade.bullish ? {"color" : "green"} : {"color" : "salmon"}}>{trade.bullish ? "Long" : "Short"}</h5>
        <h5 className='trade-item-score' style={trade.score < 60 ? {"color": "salmon"} : trade.score < 85 ? {"color": "yellow"} : {"color" : "green"}}>{trade.score}%</h5>
      </div>
      {showDetails && <DashboardLineDetails trade={trade} />}
    </>
    
  )
}

export default DashboardLine
