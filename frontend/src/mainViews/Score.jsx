import React, { useState } from 'react';
import High_checklist from '../components/Score/High_checklist';
import Entry_checklist from '../components/Score/Entry_checklist';
import './Score.css';
import ScoreSummary from '../components/Score/ScoreSummary';
import { Button } from 'react-bootstrap';
import SaveTradeModal from '../modals/SaveTradeModal';
import { calculateTotal, calculateEntryTotal } from '../helpers/toggleFlags';


function Score() {
  const [scores, setScores] = useState({
    weekly: 0,
    daily: 0,
    fourHour: 0,
    minor: 0,
    entry: 0,
  });

  const [showModal, setShowModal] = useState(false);

  const updateScore = (key, value) => {
    setScores(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

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
    <div className='main-score-container'>
      <High_checklist Title="Weekly" value={scores.weekly} onChange={(v) => updateScore("weekly", v)} />
      <High_checklist Title="Daily" value={scores.daily} onChange={(v) => updateScore("daily", v)} />
      <High_checklist Title="4 Hour" value={scores.fourHour} onChange={(v) => updateScore("fourHour", v)} />
      <Entry_checklist value={scores.entry} onChange={(v) => updateScore("entry", v)}/>
      <ScoreSummary scores={scores} />

      <Button variant='success' onClick={handleShowModal}>Save trade</Button>

      <SaveTradeModal 
        show={showModal} 
        setShow={setShowModal} 
        score={calculateAll()} 
        data={scores}
        timeframe_scores={scores}
      />
    </div>
  );
}

export default Score;
