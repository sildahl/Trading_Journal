import React from 'react'
import './DashboardLineDetails.css'
import { API_URL } from '../../config'
import TextareaAutosize from 'react-textarea-autosize';

function DashboardLineDetails({trade}) {
  return (
    <div className='trade-line-details'>
        {trade.image_before.length > 5 && <img src={API_URL+'/uploads/'+trade.image_before} className='trade-details-image'/>}
        <TextareaAutosize className='trade-details-note' value={trade.note} minRows={3} readOnly/>
    </div>
  )
}

export default DashboardLineDetails
