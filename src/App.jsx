import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'
import Dashboard from './Components/Dashboard'
import OTP from './Pages/OTP';


const App = () => {
  return (
    <Router>
       <Login/>
       <OTP/>
       <Dashboard/>
      
     <Routes>
     <Route path="/Add-btn" element={<Add-btn />} />
     <Route path="/Login" element={<Login />} />
    </Routes>
    </Router> 
  )
}

export default App