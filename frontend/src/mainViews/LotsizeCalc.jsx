import React, { useState } from 'react'
import './LotsizeCalc.css'
import PairDropdown from '../components/PairDropdown'
import SLTPpips from '../components/SLTPpips'


function LotsizeCalc() {
    const [selectedPair, setSelectedPair] = useState("EUR/USD")
    const [balance, setBalance] = useState("10.000")
    const [switchState, setSwitchState] = useState(false)
    const [risk, setRisk] = useState(0)
    const [switchState2, setSwitchState2] = useState(false)
    const [sl, setSL] = useState(0)
    const [tp, setTp] = useState(0)

    const handleBalanceChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setBalance(formattedValue);
  };

  return (
    <div className='main-lot-container'>
        {/* Pair selection  */}
        <span className='span-line'>
            <h5>
                Pair: 
            </h5>
            <PairDropdown selected={selectedPair} setSelected={setSelectedPair} />
        </span>

        {/* Balance input  */}
        <span className='span-line'>
            <h5>
                Balance:
            </h5>
            <input type="text" value={balance} onChange={handleBalanceChange} />
        </span>

        {/* Risk toggle switch  */}
        <span className='span-line'>
            <h5 className={!switchState ? "toggle-selected" : "toggle-not-selected"}>
                Risk %
            </h5>

            <div
            className={`toggle-switch2 ${switchState ? "on" : ""}`}
            style={{"position": "relative", "marginRight": "20px"}}
            onClick={() => setSwitchState(!switchState)}
            >
                <div className="switch-handle" />
            </div>

            <h5 className={switchState ? "toggle-selected" : "toggle-not-selected"}>
                Risk $
            </h5>
            
        </span>

        {/* Risk amount  */}
        <span className='span-line'>
            <h5>
                Risk amount:
            </h5>
            <input type="text" placeholder="0" value={risk} onChange={(e) => setRisk(e.target.value)} style={{"width": "145px"}}/>
            {switchState ? "$" : "%"}
        </span>


        {/* TP og SL levels toggle switch */}
        <span className='span-line'>
            <h5 className={!switchState2 ? "toggle-selected" : "toggle-not-selected"}>
                Pips
            </h5>

            <div
            className={`toggle-switch2 ${switchState2 ? "on" : ""}`}
            style={{"position": "relative", "marginRight": "20px"}}
            onClick={() => setSwitchState2(!switchState2)}
            >
                <div className="switch-handle" />
            </div>

            <h5 className={switchState2 ? "toggle-selected" : "toggle-not-selected"}>
                Price
            </h5>

            
        </span>

    
        {!switchState2 && <SLTPpips sl={sl} setSl={setSL} tp={tp} setTp={setTp} />}


    </div>
  )
}

export default LotsizeCalc
