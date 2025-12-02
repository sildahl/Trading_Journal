import React from 'react'
import './ToggelSwitch.css'

function ToggelSwitch({Title, percentage, switchState, setSwitchState}) {

  return (
    <div className='item-container'>
        <h6>
            {Title}
        </h6>
        <div
        className={'toggle-switch' + (switchState ? ' on' : '')}
        onClick={() => setSwitchState(!switchState)}
        >
            <div className="switch-handle" />
            <label className={'switch-label' + (switchState ? ' on' : '')} >
              {percentage} %
            </label>   
        </div>
    </div>
  )
}

export default ToggelSwitch
