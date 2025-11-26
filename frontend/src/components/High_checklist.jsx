import React, { useState } from 'react'
import './High_checklist.css'
import ToggleSwitch from './ToggelSwitch'

function High_checklist({Title}) {
    const [toggles, setToggles] = useState({
        trend: { active: false, score: 10 },
        ema: { active: false, score: 10},
        aoi: { active: false, score: 10 },
        psych: { active: false, score: 5 },
        hs: { active: false, score: 10 }
    });

    function updateToggle(key, newActiveState) {
        setToggles(prev => ({
        ...prev,
        [key]: {
            ...prev[key],
            active: newActiveState
        }
        }));
    }

    function calculateScore() {
        return Object.values(toggles)
        .filter(t => t.active)
        .reduce((sum, t) => sum + t.score, 0);
    }

  return (
    <div className='main-container'>
        <span className='title-container'>
            <h3 style={{"marginTop": "5px"}}>
                {Title}
            </h3 >
            <h4 style={{"marginTop": "8px", "position": "absolute", "right": "0px"}}>
                Score: {calculateScore()}%
            </h4>
        </span>
        
        <ToggleSwitch Title={"Trend"} switchState={toggles.trend.active} setSwitchState={(value) => updateToggle("trend", value)}/>
        <ToggleSwitch Title={"EMA touch"} switchState={toggles.ema.active} setSwitchState={(value) => updateToggle("ema", value)}/>
        <ToggleSwitch Title={"AOI rejection"} switchState={toggles.aoi.active} setSwitchState={(value) => updateToggle("aoi", value)}/>
        <ToggleSwitch Title={"Psychological level"} switchState={toggles.psych.active} setSwitchState={(value) => updateToggle("psych", value)}/>
        <ToggleSwitch Title={"Head and shoulders/Double bottom"} switchState={toggles.hs.active} setSwitchState={(value) => updateToggle("hs", value)}/>
            
    </div>
  )
}

export default High_checklist
