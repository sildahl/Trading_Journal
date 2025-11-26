import React from 'react'
import './ToggelSwitch.css'

function ToggelSwitch({Title, switchState, setSwitchState}) {
  return (
    <div className='item-container'>
        <label>
            {Title}
        </label>
        <div
        className={`toggle-switch ${switchState ? "on" : ""}`}
        onClick={() => setSwitchState(!switchState)}
        >
            <div className="switch-handle" />
        </div>

    </div>
  )
}

export default ToggelSwitch
