import React, { useEffect, useState } from 'react'
import './ScoreSummary.css'
import { calculateTotal, calculateEntryTotal } from '../../helpers/toggleFlags'

function ScoreSummary({scores}) {
    const [score, setScore] = useState(0)

    useEffect(() => {
        setScore(calculateAll())
    },[scores])

    const calculateAll = () => {
        const keys = Object.keys(scores)
        let sum = 0;
        keys.forEach(x => {
          if(x == "entry"){
            sum += calculateEntryTotal(scores[x])
          }
          else{
            sum += calculateTotal(scores[x])
          }
        })
        return sum
      };

  return (
    <div className='main-summary-container' style={{"border": "1px solid lightgray"}}>
        <h2>Score Summary</h2>
        <div className='scores-box-container'>
            <div className='score-summary-item'>
                <h4>Weekly</h4>
                <h3>{calculateTotal(scores.weekly)}%</h3>
            </div>
            <div className='score-summary-item'>
                <h4>Daily</h4>
                <h3>{calculateTotal(scores.daily)}%</h3>
            </div>
            <div className='score-summary-item'>
                <h4>4 Hour</h4>
                <h3>{calculateTotal(scores.fourHour)}%</h3>
            </div>
            <div className='score-summary-item'>
                <h4>Minor</h4>
                <h3>{calculateTotal(scores.minor)}%</h3>
            </div>
            <div className='score-summary-item'>
                <h4>Entry</h4>
                <h3>{calculateEntryTotal(scores.entry)}%</h3>
            </div>
            
        </div>
        <div className='score-summary-final-item' style={ score < 60 ? {"color": "salmon"} : score < 85 ? {"color": "yellow"} : {"color" : "green"}} >
                <h3>Confidence Score</h3>
                <h2 >{score}%</h2>
            </div>
    </div>
  )
}

export default ScoreSummary