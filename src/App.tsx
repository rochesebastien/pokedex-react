import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";

import Homepage from './pages/Home/Homepage';
import Stats from './pages/Stats/Stats';
import Search from './pages/Search/Search';
import RandomTeam from './pages/RandomTeam/RandomTeam';
import TypesTable from './pages/TypesTable/TypesTable';

import PokemonList from './components/PokemonList/PokemonList';

function App() {

  return (
    <div className="App">
        <PokemonList />
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="/stats/:id" element={<Stats />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/search" element={<Search />} />
            <Route path="/randomteam" element={<RandomTeam />} />
            <Route path="/typestable" element={<TypesTable />} />
          </Routes>
    </div>
  )
}

export default App
