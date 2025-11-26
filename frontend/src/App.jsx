import { useEffect, useState } from 'react'
import './App.css'
import { API_URL } from './config'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from 'react-router-dom';
import Score from './mainViews/Score';
import LotsizeCalc from './mainViews/LotsizeCalc';

function App() {

  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "alignItems": "center", "box-sizing": "border-box"}}>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Score />} />
          <Route path="/lotsizecalculator" element={<LotsizeCalc />} />
        </Routes>
        

      </div>
    </>
  )
}

export default App
