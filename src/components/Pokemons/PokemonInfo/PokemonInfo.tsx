import React, { useState, useEffect } from 'react';
import { Pokemon } from '../../../types/Pokemon.types';
import './PokemonInfo.css';

function PokemonInfo(props: any) {
    const [pokemon_info, setPokemonInfo] = useState<Pokemon | null>(null);

    useEffect(() => {
        if (props.pokemon) {
            setPokemonInfo(props.pokemon);
        }
    }
        , [props.pokemon])


    const handlePokemonSelection = () => {
        setPokemonInfo(null);
    }

    return (
        pokemon_info ? (
            <div className="pokemon_info_ctn">
                <div className="title_ctn">
                    <h1>{pokemon_info.name}</h1>
                </div>
                <button className='close_btn' onClick={() => handlePokemonSelection()}>X</button>
                <ul className="pokemon_info_stats">
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: pokemon_info.stats.HP / 252 * 100 + "%" }}>
                                <img src="/icons/heart.svg" alt="" />
                                <span>{pokemon_info.stats.HP}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: pokemon_info.stats.attack / 252 * 100 + "%" }}>
                                <img src="/icons/Atk.svg" alt="" />
                                <span>{pokemon_info.stats.attack}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: pokemon_info.stats.defense + "%" }}>
                                <img src="/icons/Def.svg" alt="" />
                                <span>{pokemon_info.stats.defense}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: pokemon_info.stats.special_attack / 252 * 100 + "%" }}>
                                <img src="/icons/Atk Spe.svg" alt="" />
                                <span>{pokemon_info.stats.special_attack}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: pokemon_info.stats.special_defense / 252 * 100 + "%" }}>
                                <img src="/icons/Def Spe.svg" alt="" />
                                <span>{pokemon_info.stats.special_defense}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: pokemon_info.stats.speed / 252 * 100 + "%" }}>
                                <img src="/icons/Spd.svg" alt="" />
                                <span>{pokemon_info.stats.speed}</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <img src={`${pokemon_info.image}`} id="pokemon_info_img" />
                <span id="pokemon_info_id">{pokemon_info.id}</span>
            </div>
        ) : null
    );
}

export default PokemonInfo