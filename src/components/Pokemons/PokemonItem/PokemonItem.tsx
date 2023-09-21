import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Pokemon } from '../../../types/Pokemon.types';
import './PokemonItem.css';

function PokemonItem(props : Pokemon) {
    return (

        <div key={props.id} className='pokemons_item'>
            <img src={`${props.image}`} alt="" />
            <span id='name'>{props.name}</span>
            <span id='id'>{props.id}</span>
        </div>
    )

}

export default PokemonItem