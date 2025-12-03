import React from 'react';
import './High_checklist.css';
import ToggleSwitch from './ToggelSwitch';
import { FLAGS, SCORES, calculateTotal } from '../helpers/toggleFlags';

function High_checklist({ Title, value, onChange }) {

  const handleToggle = (flag) => {
    const newValue = value ^ flag; // XOR = flip bit
    onChange(newValue);
  };

  return (
    <div className='main-container'>
      <span className='title-container'>
        <h2 style={{ marginTop: "5px" }}>
          {Title}
        </h2>
        <h4 style={{ marginTop: "8px", position: "absolute", right: "0px" }}>
          Score: {calculateTotal(value)}%
        </h4>
      </span>

      <ToggleSwitch 
        Title="Trend"
        percentage={SCORES.trend}
        switchState={!!(value & FLAGS.trend)}
        setSwitchState={() => handleToggle(FLAGS.trend)}
      />

      <ToggleSwitch 
        Title="At AOI / Rejected"
        percentage={SCORES.aoi}
        switchState={!!(value & FLAGS.aoi)}
        setSwitchState={() => handleToggle(FLAGS.aoi)}
      />

      <ToggleSwitch 
        Title="EMA touch"
        percentage={SCORES.ema}
        switchState={!!(value & FLAGS.ema)}
        setSwitchState={() => handleToggle(FLAGS.ema)}
      />

      <ToggleSwitch 
        Title="Psychological level"
        percentage={SCORES.psych}
        switchState={!!(value & FLAGS.psych)}
        setSwitchState={() => handleToggle(FLAGS.psych)}
      />

      <ToggleSwitch 
        Title="Rejection from previous structure"
        percentage={SCORES.rejection}
        switchState={!!(value & FLAGS.rejection)}
        setSwitchState={() => handleToggle(FLAGS.rejection)}
      />

      <ToggleSwitch 
        Title="Candlestick rejection from AOI"
        percentage={SCORES.crejection}
        switchState={!!(value & FLAGS.crejection)}
        setSwitchState={() => handleToggle(FLAGS.crejection)}
      />

      <ToggleSwitch 
        Title="Break and retest / Head and shoulders"
        percentage={SCORES.hs}
        switchState={!!(value & FLAGS.hs)}
        setSwitchState={() => handleToggle(FLAGS.hs)}
      />

    </div>
  );
}

export default High_checklist;
