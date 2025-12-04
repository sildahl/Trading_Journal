import React, { useEffect, useState } from 'react'
import './DashboardLine.css'
import DashboardLineDetails from './DashboardLineDetails'
import { Button } from 'react-bootstrap';
import { FaRegTrashAlt } from "react-icons/fa";
import DeleteTradeModal from '../../modals/DeleteTradeModal';

function DashboardLine({trade, update, setUpdate}) {
  const [showDetails, setShowDetails] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  const handleShowDetails = () => {
    setShowDetails(!showDetails)
  }

  useEffect(() => {
    if (showDelete == false){
      setUpdate(update + 1)
    }
  },[showDelete])

  return (
    <>
      <div className='trade-line' onClick={handleShowDetails}>
        <h5 style={{"width" : "6em"}}>{trade.pair}</h5>
        <h5 style={trade.bullish ? {"color" : "green"} : {"color" : "salmon"}}>{trade.bullish ? "Long" : "Short"}</h5>
        
        <div className='button-right-container'>
          <Button variant='ghost' className='icon-btn' onClick={(e) => {e.stopPropagation(); setShowDelete(true)}} ><FaRegTrashAlt color='red' size={18}/></Button>
          <h5 className='trade-item-score' style={trade.score < 60 ? {"color": "salmon"} : trade.score < 85 ? {"color": "yellow"} : {"color" : "green"}}>{trade.score}%</h5>
        </div>
        
      </div>
      {showDetails && <DashboardLineDetails trade={trade} />}
      {showDelete && <DeleteTradeModal trade={trade} show={showDelete} setShow={setShowDelete} />}
    </>
    
  )
}

export default DashboardLine
