import './PokemonsPage.css';
import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../api/PokemonRepository';
import { Pokemon } from '../../types/Pokemon.types';
import PokemonItem from '../../components/Pokemons/PokemonItem/PokemonItem';
import PokemonTypesList from '../../components/Pokemons/PokemonTypesList/PokemonTypesList';

function PokemonsPage(props: any) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [pokemons_save, setPokemonsSave] = useState<Pokemon[]>([]);


  const SearchPokemon = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    setPokemons(pokemons_save)
    if (event.target.value != "") {
      setPokemons(pokemons.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }
  }


  useEffect(() => {
    async function getPokemonsLoad() {
      const pokemons = await getPokemons();
      setPokemons(pokemons);
      setPokemonsSave(pokemons);
    }
    getPokemonsLoad();
  }, []);


  return (
    <div className="pokemons_page" >
      <div className="title">
        <h1>{props.title}</h1>
        <input type="search" name="pokemon_search" id="" placeholder='Rechercher...' onChange={SearchPokemon} value={inputValue} />
      </div>
      <PokemonTypesList />
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
