import './Search.css';
import React, { useState, useEffect } from 'react';
import {getPokemons} from '../../api/PokemonRepository';

async function GetPokemonslist() {
  const pokemon_list = await getPokemons () ;
  return pokemon_list
}

function Search() { 
  const [pokemons, setPokemons] = useState ([]) ;

    useEffect (() => {
        async function getPokemonsLoad () {
            const pokemons = await getPokemons () ;
            setPokemons(pokemons) ;
        }
        getPokemonsLoad ();
    }, []);

    return (
      <div className="search_page" >
        Page Searcb !
        <datalist id="data">
        {pokemons.map((pokemon,key) => (

              <option  key={pokemon.id} value={pokemon.name}/>
          ))}
        </datalist>
        <input name="" id="" autoComplete='off' placeholder="Rechercher le nom d'un pokemon" list="data" />
        <button>Rechercher</button>
      </div>
    )

    
  }
  
  export default Search
  