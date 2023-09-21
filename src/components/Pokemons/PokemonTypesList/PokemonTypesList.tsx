import React, { useState, useEffect } from 'react';
import { Pokemon, PokemonType } from '../../../types/Pokemon.types';
import { getPokemonTypes } from '../../../api/PokemonRepository';
import './PokemonTypesList.css';

function PokemonTypesList() {
    const [types, setTypes] = useState<PokemonType[]>([]);
    useEffect(() => {
        getPokemonTypes().then(types => {
            setTypes(types);
        });
    }, []);

    return (

        <div className='pokemons_types_list'>
            {
                types.map((type: PokemonType) => (
                    <img src={`${type.image}`} alt="" />
                ))
            }
        </div>
    )

}

export default PokemonTypesList