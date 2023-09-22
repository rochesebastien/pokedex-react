import React, { useState, useEffect } from 'react';
import { Pokemon, PokemonType } from '../../../types/Pokemon.types';
import { getPokemonTypes } from '../../../api/PokemonRepository';
import './PokemonTypesList.css';

function PokemonTypesList(props: any) {
    const [types, setTypes] = useState<PokemonType[]>([]);
    useEffect(() => {
        getPokemonTypes().then(types => {
            setTypes(types);
        });
    }, []);

    const handleTypeSelection = (type_name : string) => {
        // Appeler la fonction de rappel pour remonter la variable
        props.typesSelected(type_name);
      };

    return (

        <div className='pokemons_types_list'>
            {
                types.map((type: PokemonType) => (
                    <div className="pokemon_type" onClick={() => handleTypeSelection(type.name)} key={type.id}>
                        <img src={`${type.image}`} alt="" />
                        <span>{type.name}</span>
                    </div>

                ))
            }
        </div>
    )

}

export default PokemonTypesList