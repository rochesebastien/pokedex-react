import { useParams } from 'react-router-dom';
import './infopage.css'
import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from 'react';
import {getOnePokemon} from '../../api/PokemonRepository';
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';


function Infopage() { 
    return (
      <div className="infopage">
        <div className="deco">
            <div className="circle"></div>
                <div className="circle_color-ctn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    <PokemonInfo />
      </div>
    )
  }
  
  export default Infopage
  