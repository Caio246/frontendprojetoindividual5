import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Destino from './Pages/Destino/Destino'
import Contato from './Pages/Contato/Contato'
import Promocoes from './Pages/Promocoes/Promocoes'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" excat element={<Home />}></Route>
        <Route path="/Destino" element={<Destino />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>
        <Route path="/Promocoes" element={<Promocoes />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
