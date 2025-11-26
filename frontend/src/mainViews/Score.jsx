import React from 'react'
import High_checklist from '../components/High_checklist'

function Score() {
  return (
    <div  style={{"width": "100%", "display": "flex", "flexDirection": "column", "alignItems": "center", "box-sizing": "border-box"}}>
        <High_checklist Title={"Weekly"}/>
        <High_checklist Title={"Daily"}/>
        <High_checklist Title={"4 Hour"}/>
    </div>
  )
}

export default Score
