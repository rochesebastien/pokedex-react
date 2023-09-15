import './Search.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {getPokemons,SearchPokemonByName} from '../../api/PokemonRepository';
import { Pokemon } from '../../types/Pokemon.types';
import Navbar from '../../components/Navbar/Navbar';

function SearchPage() { 
  const [pokemons, setPokemons] = useState ([]) ;

    useEffect (() => {
        async function getPokemonsLoad () {
            const pokemons = await getPokemons () ;
            setPokemons(pokemons) ;
        }
        getPokemonsLoad ();
    }, []);

    async function ClickButtonSearch() {
      const input = document.querySelector('#InputSearch') as HTMLInputElement;
      console.log(input.value);
      const test = await SearchPokemonByName(input.value);
      console.log('You clicked submit.');
      console.log(test);
      const navigate = useNavigate();
      navigate('/stats');
    }
    

    return (
      <div className="search_page" >
        <Navbar />
        <datalist id="data">
        {pokemons.map((pokemon : Pokemon,key) => (
              <option  key={pokemon.id} value={pokemon.name}/>
          ))}
        </datalist>
        <input name="" id="InputSearch" autoComplete='off' placeholder="Rechercher le nom d'un pokemon" list="data" />
        <button onClick={ClickButtonSearch}>Rechercher</button>
      </div>
    )

    
  }
  
  export default SearchPage
  