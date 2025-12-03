import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { API_URL } from '../config'

function Dashboard() {
    const [trades, setTrades] = useState({active_trades: [], latest_trades: []})

    useEffect(() => {
        const initialFetch = async () => {
            const resp = await fetch(API_URL + "/api/getTrades") 
            const data = await resp.json()
            const _trades = {
                active_trades: data.active_trades,
                latest_trades: data.latest_trades
            }
            setTrades(_trades)
        } 
        console.log(API_URL)
        initialFetch()
    },[])
  return (
    <div>
      {trades.active_trades.map((item, i)=> {return (
        <div key={"active_trades_" + i}>
            {item.pair + " -> " + item.score}
        </div>
        )})}
    </div>
  )
}

export default Dashboard
