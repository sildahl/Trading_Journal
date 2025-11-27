import React, { useEffect } from 'react'
import './ScoreSummary.css'

function ScoreSummary({scores}) {

  return (
    <div className='main-summary-container' style={{"border": "1px solid lightgray"}}>
        <h2>Score Summary</h2>
        <div className='scores-box-container'>
            <div className='score-summary-item'>
                <h4>Weekly</h4>
                <h3>{scores.weekly}%</h3>
            </div>
            <div className='score-summary-item'>
                <h4>Daily</h4>
                <h3>{scores.daily}%</h3>
            </div>
            <div className='score-summary-item'>
                <h4>4 Hour</h4>
                <h3>{scores.fourHour}%</h3>
            </div>
            <div className='score-summary-item'>
                <h4>Minor</h4>
                <h3>{scores.minor}%</h3>
            </div>
            <div className='score-summary-item'>
                <h4>Entry</h4>
                <h3>{scores.entry}%</h3>
            </div>
            
        </div>
        <div className='score-summary-final-item'>
                <h4>Confidence Score</h4>
                <h3>{Object.values(scores).reduce((a, b) => a + b, 0)}%</h3>
            </div>
    </div>
  )
}

export default ScoreSummary