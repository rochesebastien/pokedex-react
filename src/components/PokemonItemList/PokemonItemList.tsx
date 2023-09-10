import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Pokemon } from '../../types/Pokemon.types';

function PokemonItemList(props : Pokemon) {
    const [loading, setLoading] = useState(true);
    return (

        <Link key={props.id} className='pokemon_link' to={`/stats/${props.id}`}>
            <img src={`${props.image}`} alt="" />
            <span>{props.name}</span>
        </Link>
    )

}

export default PokemonItemList