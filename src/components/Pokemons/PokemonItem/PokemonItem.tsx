import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Pokemon } from '../../../types/Pokemon.types';
import { PokemonCell } from '../../../types/Pokemon.types';
import './PokemonItem.css';


import LazyLoad from 'react-lazyload';


function PokemonItem(props: PokemonCell) {
    const handleClick = () => {
        props.selected(props.pokemon)
    };

    return (

        <div key={props.pokemon.id} className='pokemons_item' onClick={handleClick}>
            <LazyLoad height={200} offset={100}>
                <img src={`${props.pokemon.image}`} alt="" />
            </LazyLoad>
            <span id='name'>{props.pokemon.name}</span>
            <span id='id'>{props.pokemon.id}</span>
        </div>
    )

}

export default PokemonItem