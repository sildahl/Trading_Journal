import React from 'react'

function SLTPpips({sl, setSl, tp, setTp}) {

  return (
    <span style={{"position": "relative", "display": "flex", "alignItems": "center", "marginBottom": "20px", "justifyContent": "center"}}>
        <h5> Stop loss </h5>
        <input type='number' value={sl} onChange={(e) => setSl(e.target.value)} style={{"width" : "100px"}}/>
        <span style={{"width": "50px"}} />
        <h5> Take profit </h5>
        <input type='number' value={tp} onChange={(e) => setTp(e.target.value)} style={{"width" : "100px"}}/>
    </span>
  )
}

export default SLTPpips
