import React, { useState } from 'react';
import High_checklist from '../components/High_checklist';
import './Score.css';
import ScoreSummary from '../components/ScoreSummary';
import { Button } from 'react-bootstrap';
import SaveTradeModal from '../modals/SaveTradeModal';
import { calculateTotal } from '../helpers/toggleFlags';

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
    return Object.values(scores)
      .map(v => calculateTotal(v))
      .reduce((a, b) => a + b, 0);
  };

  return (
    <div className='main-score-container'>
      <High_checklist Title="Weekly" value={scores.weekly} onChange={(v) => updateScore("weekly", v)} />
      <High_checklist Title="Daily" value={scores.daily} onChange={(v) => updateScore("daily", v)} />
      <High_checklist Title="4 Hour" value={scores.fourHour} onChange={(v) => updateScore("fourHour", v)} />

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
