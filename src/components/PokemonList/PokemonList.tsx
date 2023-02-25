import { useParams } from 'react-router-dom';
import './pokemonlist.css'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../data/PokemonRepository.js'

// async function fetchData() {
//     const response =  fetch('https://pokebuildapi.fr/api/v1/pokemon/');
//     const data = (await response).json();
//     test = data;
// }

function PokemonList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const fetchExampleData = async () => {
          const data = await getPokemons();
          setPokemons(data);
        };
        fetchExampleData();
      }, []);
      

    return (
        <div className="screen_scroll">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
            <span>Bulbizarre</span>
            
        </div>
    )

    
  }
  
  export default PokemonList