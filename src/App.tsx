import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";

import Homepage from './pages/Homepage/Homepage';
import Infopage from './pages/Infopage/Infopage';

function App() {

  return (
    <div className="App">
          <Routes>
            <Route path="/info/:id" element={<Infopage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/info" element={<Infopage />} />
          </Routes>
    </div>
  )
}

export default App
