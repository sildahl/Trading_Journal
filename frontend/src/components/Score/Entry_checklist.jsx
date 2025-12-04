import React from 'react'
import './Entry_checklist.css'
import './High_checklist.css'
import { ENTRY_FLAGS, ENTRY_SCORES, calculateEntryTotal } from '../../helpers/toggleFlags';
import ToggelSwitch from '../ToggelSwitch';

function Entry_checklist({ value, onChange }) {
    
    const handleToggle = (flag) => {
        const newValue = value ^ flag; // XOR = flip bit
        onChange(newValue);
    };

  return (
     <div className='main-container'>
      <span className='title-container'>
        <h2 style={{ marginTop: "5px" }}>
          Entry
        </h2>
        <h4 style={{ marginTop: "8px", position: "absolute", right: "0px" }}>
          Score: {calculateEntryTotal(value)}%
        </h4>
      </span>
   
      <ToggelSwitch 
        Title="Engulfing"
        percentage={ENTRY_SCORES.engulf}
        switchState={!!(value & ENTRY_FLAGS.engulf)}
        setSwitchState={() => handleToggle(ENTRY_FLAGS.engulf)}
      />
        
      <ToggelSwitch 
        Title="BOS"
        percentage={ENTRY_SCORES.bos}
        switchState={!!(value & ENTRY_FLAGS.bos)}
        setSwitchState={() => handleToggle(ENTRY_FLAGS.bos)}
      />

    </div>
  )
}

export default Entry_checklist
