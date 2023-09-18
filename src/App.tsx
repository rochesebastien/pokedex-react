import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {
  Routes,
  Route,
} from "react-router-dom";


import Homepage from './pages/Home/Homepage';
import PokemonsPage from './pages/Pokemons/PokemonsPage';
import TypePage from './pages/Type/TypePage';

import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
            <Routes>
            <Route path="" element={<Homepage title="Écran d'accueil" />} />
            <Route path="/home" element={<Homepage title="Écran d'accueil" />} />
            <Route path="/pokemons" element={<PokemonsPage title="Trouvez vos pokémons" />} />
            {/* <Route path="/team" element={<RandomTeam />} /> */}
            <Route path="/types" element={<TypePage title="Voir les types" />} />
          </Routes>
    </div>
  )
}

export default App
