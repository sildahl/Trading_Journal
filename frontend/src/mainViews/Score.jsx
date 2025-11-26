import React from 'react'
import High_checklist from '../components/High_checklist'
import './Score.css'

function Score() {
  return (
    <div className='main-score-container'>
        <High_checklist Title={"Weekly"}/>
        <High_checklist Title={"Daily"}/>
        <High_checklist Title={"4 Hour"}/>
    </div>
  )
}

export default Score
