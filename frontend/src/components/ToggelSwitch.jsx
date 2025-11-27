import React from 'react'
import './ToggelSwitch.css'

function ToggelSwitch({Title, switchState, setSwitchState}) {
  return (
    <div className='item-container'>
        <h6>
            {Title}
        </h6>
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
