import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { API_URL } from '../config'
import DashboardLine from '../components/Dashboard/DashboardLine'
import DashboardLineDetails from '../components/Dashboard/DashboardLineDetails'

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
    <div style={{"position":"relativ", "width":"100%", "display": "flex", "flexDirection": "column", "alignItems": "center"}}>
      {trades.active_trades.map((item, i)=> {return (
          <DashboardLine trade={item} />
        )})}
    </div>
  )
}

export default Dashboard
