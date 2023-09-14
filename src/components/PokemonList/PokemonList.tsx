import './Pokemonlist.css'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../api/PokemonRepository';
import PokemonItemList from '../PokemonItemList/PokemonItemList';
import { Pokemon } from '../../types/Pokemon.types';
import ColorsCircles from '../Deco/ColorsCircles/ColorsCircles';
// async function fetchData() {
//     const response =  fetch('https://pokebuildapi.fr/api/v1/pokemon/');
//     const data = (await response).json();
//     test = data;
// }

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function getPokemonsLoad() {
            const pokemons = await getPokemons();
            setPokemons(pokemons);
        }
        getPokemonsLoad();
    }, []);
    return (
        <div className="pokemonlist-ctn">
            <div className="screen_scroll">
                {pokemons.length > 0 ? (
                    pokemons.map((pokemon: Pokemon) => (
                        <PokemonItemList key={pokemon.id} {...pokemon} />
                    ))
                ) : (
                    <img id="loader" src="icons/loader.gif" alt=""/>
                )}
            </div>
            <ColorsCircles />
        </div>
    )

}

export default PokemonList