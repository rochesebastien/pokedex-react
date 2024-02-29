import React, { useState, useEffect } from 'react';
import { Pokemon, PokemonType } from '../../../types/Pokemon.types';
import { getPokemonTypes } from '../../../api/PokemonRepository';
import './PokemonTypesList.css';

function PokemonTypesList(props: any) {
    const [types, setTypes] = useState<PokemonType[]>([]);
    const [filterBool, setFilterBool] = useState<boolean>(false);
    useEffect(() => {
        getPokemonTypes().then(types => {
            setTypes(types);
        });
    }, []);

    const handleTypeSelection = (type: PokemonType) => {

        setFilterBool(!filterBool); // invert the boolean of the filter
        props.typesSelected(filterBool ? type : null); // if filterBool is true, send the type, else send null
    };


    useEffect(() => {
        // console.log("Filter : ", filterBool);
    }, [filterBool]);

    return (
        <div className='pokemons_types_list'>
            {
                types.map((type: PokemonType) => (
                    // console.log("Type : ", type.id),
                    // console.log("Selected Type : ", props.selectedType?.id),
                    <div className={`pokemon_type ${filterBool && type === props.typesSelected ? 'selected' : ''}`} onClick={() => handleTypeSelection(type)} key={type.id}>
                        <img src={`${type.image}`} alt="" />
                        <span>{type.name}</span>
                    </div>
                ))
            }
        </div>
    )

}

export default PokemonTypesList