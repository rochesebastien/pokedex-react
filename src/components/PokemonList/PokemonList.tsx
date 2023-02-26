import './pokemonlist.css'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {getPokemons} from '../../api/PokemonRepository';

// async function fetchData() {
//     const response =  fetch('https://pokebuildapi.fr/api/v1/pokemon/');
//     const data = (await response).json();
//     test = data;
// }

function PokemonList() {
    const [pokemons, setPokemons] = useState ([]) ;

    useEffect (() => {
        async function getPokemonsLoad () {
            const pokemons = await getPokemons () ;
            setPokemons(pokemons) ;
        }
        getPokemonsLoad ();
    }, []);
    return (
        <div className="pokemonlist-ctn">
            <div className="screen_scroll">
            {pokemons.map((pokemon) => (
                    <Link className='pokemon_link' to={`/info/${pokemon.id}`}>
                <img src={`${pokemon.image}`} alt="" />
                <span>{pokemon.name}</span>
                </Link>
            ))}
            </div>
        </div>
    )
    
  }
  
  export default PokemonList