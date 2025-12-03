import React from 'react'
import './DashboardLineDetails.css'
import { API_URL } from '../../config'

function DashboardLineDetails({trade}) {
  return (
    <div className='trade-line-details'>
        {trade.image_before.length > 5 && <img src={API_URL+'/uploads/'+trade.image_before} className='trade-details-image'/>}
        <textarea className='trade-details-note' value={trade.note} rows={3} readOnly/>
    </div>
  )
}

export default DashboardLineDetails
