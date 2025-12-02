import React, { useEffect, useState } from 'react'
import './High_checklist.css'
import ToggleSwitch from './ToggelSwitch'

function High_checklist({Title, setScore}) {
    const [toggles, setToggles] = useState({
        trend: { active: false, score: 10 },
        aoi: { active: false, score: 10 },
        ema: { active: false, score: 5},
        psych: { active: false, score: 5 },
        rejection: { active: false, score: 10 },
        crejection: { active: false, score: 10 },
        hs: { active: false, score: 10 }
    });

    useEffect(() => {
        const newScore = calculateScore();
        setScore(newScore);
    }, [toggles]);

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
        const newScore = Object.values(toggles)
        .filter(t => t.active)
        .reduce((sum, t) => sum + t.score, 0);
        return newScore;
    }

  return (
    <div className='main-container'>
        <span className='title-container'>
            <h2 style={{"marginTop": "5px"}}>
                {Title}
            </h2 >
            <h4 style={{"marginTop": "8px", "position": "absolute", "right": "0px"}}>
                Score: {calculateScore()}%
            </h4>
        </span>
        
        <ToggleSwitch Title={"Trend"} percentage={toggles.trend.score} switchState={toggles.trend.active} setSwitchState={(value) => updateToggle("trend", value)}/>
        <ToggleSwitch Title={"At AOI / Rejected"} percentage={toggles.aoi.score} switchState={toggles.aoi.active} setSwitchState={(value) => updateToggle("aoi", value)}/>
        <ToggleSwitch Title={"EMA touch"} percentage={toggles.ema.score} switchState={toggles.ema.active} setSwitchState={(value) => updateToggle("ema", value)}/>
        <ToggleSwitch Title={"Psychological level"} percentage={toggles.psych.score} switchState={toggles.psych.active} setSwitchState={(value) => updateToggle("psych", value)}/>
        <ToggleSwitch Title={"Rejection from previous structure"} percentage={toggles.rejection.score} switchState={toggles.rejection.active} setSwitchState={(value) => updateToggle("rejection", value)}/>
        <ToggleSwitch Title={"Candlestick rejection from AOI"} percentage={toggles.crejection.score} switchState={toggles.crejection.active} setSwitchState={(value) => updateToggle("crejection", value)}/>
        <ToggleSwitch Title={"Break and retest / Head and shoulders"} percentage={toggles.hs.score} switchState={toggles.hs.active} setSwitchState={(value) => updateToggle("hs", value)}/>
        
    </div>
  )
}

export default High_checklist
