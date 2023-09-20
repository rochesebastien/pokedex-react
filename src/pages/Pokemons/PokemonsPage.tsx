import './PokemonsPage.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getPokemons, SearchPokemonByName } from '../../api/PokemonRepository';
import { Pokemon } from '../../types/Pokemon.types';
import Navbar from '../../components/Navbar/Navbar';
import PokemonItem from '../../components/PokemonItem/PokemonItem';


function PokemonsPage(props: any) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemonsLoad() {
      const pokemons = await getPokemons();
      setPokemons(pokemons);
    }
    getPokemonsLoad();
  }, []);


  return (
    <div className="pokemons_page" >
      <div className="title">
        <h1>{props.title}</h1>
        <input type="search" name="pokemon_search" id="" placeholder='Rechercher votre pokémon' />
      </div>
      <div className="pokemons_list_ctn">
      {pokemons.length > 0 ? (
          pokemons.map((pokemon: Pokemon) => (
            <PokemonItem key={pokemon.id} {...pokemon} />
          ))
        ) : (
          <img id="loader" src="icons/loader.gif" alt="" />
        )}
      </div>

    </div>
  )


}

export default PokemonsPage
