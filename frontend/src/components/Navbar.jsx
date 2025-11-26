import React from 'react'
import './Navbar.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  
  return (
    <div className="navbar">
        <Button variant='outline-light' onClick={() => navigate('/')}>
          Score
        </Button>
        <Button variant='outline-light' onClick={() => navigate('/lotsizecalculator')}>
          Lot size calculator
        </Button>
    </div>
  )
}

export default Navbar
