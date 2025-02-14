import { React, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hem } from './pages/Hem'
import { Meny } from './pages/Meny'
import { HittaHit } from './pages/HittaHit'
import { OmOss } from './pages/OmOss'
import './App.css'

function App() {

  return (<>
  <Router>
  <Header/>
    <Routes>
      <Route path="/" element={<Hem/>}/>
      <Route path="/meny" element={<Meny/>}/>
      <Route path="/hitta-hit" element={<HittaHit/>}/>
      <Route path="/om-oss" element={<OmOss/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
  )
}

export default App
