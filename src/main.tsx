import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'
import {
  Routes,
  Route,
} from "react-router-dom";

import Homepage from './pages/Home/Homepage';
import Stats from './pages/Stats/Stats';
import Search from './pages/Search/Search';
import RandomTeam from './pages/RandomTeam/RandomTeam';
import TypesTable from './pages/TypesTable/TypesTable';

import Navbar from './components/Navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <App />
      {/* <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="/stats/:id" element={<Stats />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/search" element={<Search />} />
            <Route path="/randomteam" element={<RandomTeam />} />
            <Route path="/typestable" element={<TypesTable />} />
          </Routes> */}
    </React.StrictMode>
  </BrowserRouter>,
)
