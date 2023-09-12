import { useParams } from 'react-router-dom';
import './Stats.css'
import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from 'react';
import { getOnePokemon } from '../../api/PokemonRepository';
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';
import ColorsCircles from '../../components/Deco/ColorsCircles/ColorsCircles';
import BigCircle from '../../components/Deco/BigCircle/BigCircle';
function Infopage() {
  return (
    <div className="stats_page">
      <BigCircle />
      <PokemonInfo />
    </div>
  )
}

export default Infopage
