import { useEffect, useState } from 'react'
import './App.css'
import { API_URL } from './config'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from 'react-router-dom';
import Score from './mainViews/Score';
import LotsizeCalc from './mainViews/LotsizeCalc';
import Dashboard from './mainViews/Dashboard';

function App() {

  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "alignItems": "center", "boxSizing": "border-box"}}>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Score />} />
          <Route path="/lotsizecalculator" element={<LotsizeCalc />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        

      </div>
    </>
  )
}

export default App
