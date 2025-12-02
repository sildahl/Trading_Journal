import React, { useState } from 'react'
import High_checklist from '../components/High_checklist'
import './Score.css'
import ScoreSummary from '../components/ScoreSummary'
import { Button } from 'react-bootstrap'
import SaveTradeModal from '../modals/SaveTradeModal'

function Score() {
  const [scores, setScores]= useState({
    weekly: 0,
    daily: 0,
    fourHour: 0,
    minor: 0,
    entry: 0,
  })
  const [showModal, setShowModal] = useState(false)

  const updateScores = (key, value) => {
    setScores(prev => ({
      ...prev,
      [key]: value
    }));
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const calculateScore = () => {
    let sum = 0;
    Object.keys(scores).forEach(key => {
      sum += scores[key]
    })
    return sum
  }

  return (
    <div className='main-score-container'>
        <High_checklist Title={"Weekly"} setScore={(value) => updateScores("weekly", value)} />
        <High_checklist Title={"Daily"} setScore={(value) => updateScores("daily", value)}/>
        <High_checklist Title={"4 Hour"} setScore={(value) => updateScores("fourHour", value)}/>
        <ScoreSummary scores={scores}/>
        <Button variant='success' onClick={handleShowModal}> Save trade </Button>
        <SaveTradeModal show={showModal} setShow={setShowModal} score={calculateScore()} />
    </div>
    
  )
}

export default Score
