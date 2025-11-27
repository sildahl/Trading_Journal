import React, { useState } from 'react'
import High_checklist from '../components/High_checklist'
import './Score.css'
import ScoreSummary from '../components/ScoreSummary'

function Score() {
  const [scores, setScores]= useState({
    weekly: 0,
    daily: 0,
    fourHour: 0,
    minor: 0,
    entry: 0,
  })

  const updateScores = (key, value) => {
    setScores(prev => ({
      ...prev,
      [key]: value
    }));
    console.log(scores)
  }

  return (
    <div className='main-score-container'>
        <High_checklist Title={"Weekly"} setScore={(value) => updateScores("weekly", value)} />
        <High_checklist Title={"Daily"} setScore={(value) => updateScores("daily", value)}/>
        <High_checklist Title={"4 Hour"} setScore={(value) => updateScores("fourHour", value)}/>
        <ScoreSummary scores={scores}/>
    </div>
  )
}

export default Score
