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
import Search from './pages/Pokemons/PokemonsPage';
import RandomTeam from './pages/RandomTeam/RandomTeam';
import TypesTable from './pages/Type/TypePage';

import Navbar from './components/Navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
)
