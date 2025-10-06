import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage';
import Servicespage from './pages/Servicespage';
import Contactpage from './pages/Contactpage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<Aboutpage />}></Route>
          <Route path="/service" element={<Servicespage />}></Route>
          <Route path="/contact" element={<Contactpage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
