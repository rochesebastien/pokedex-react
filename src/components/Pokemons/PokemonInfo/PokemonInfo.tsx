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


    const closePopup = () => {
        setPokemonInfo(null);
    }

    return (
        pokemon_info ? (
            <div className="pokemon_info_ctn">
                <div className="title_ctn">
                    <h1>{pokemon_info.name}</h1>
                </div>
                <button className='close_btn' onClick={() => closePopup()}>X</button>
                <ul className="pokemon_info_stats">
                    <li>
                        <div className="stats_item">
                            <h3>
                                <img src="/icons/life.svg" alt="" /><span> {"Vie : " + pokemon_info.stats.HP + " / 252"} </span>
                            </h3>
                            <div className="stats_bar">
                                <span className="filled" style={{ width: pokemon_info.stats.HP / 252 * 100 + "%" }}></span>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <h3>
                                <img src="/icons/atk.svg" alt="" /><span> {"Attaque : " + pokemon_info.stats.attack + " / 252"} </span>
                            </h3>
                            <div className="stats_bar">
                                <span className="filled" style={{ width: pokemon_info.stats.attack / 252 * 100 + "%" }}></span>

                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="stats_item">
                            <h3>
                                <img src="/icons/def.svg" alt="" /><span> {"Défense : " + pokemon_info.stats.defense + " / 252"} </span>
                            </h3>
                            <div className="stats_bar">
                                <span className="filled" style={{ width: pokemon_info.stats.defense / 252 * 100 + "%" }}></span>

                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="stats_item">
                            <h3>
                                <img src="/icons/atk_spe.svg" alt="" /><span> {"Attaque Spéciale : " + pokemon_info.stats.special_attack + " / 252"} </span>
                            </h3>
                            <div className="stats_bar">
                                <span className="filled" style={{ width: pokemon_info.stats.special_attack / 252 * 100 + "%" }}></span>

                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="stats_item">
                            <h3>
                                <img src="/icons/def_spe.svg" alt="" /><span> {"Défense Spéciale : " + pokemon_info.stats.special_defense + " / 252"} </span>
                            </h3>
                            <div className="stats_bar">
                                <span className="filled" style={{ width: pokemon_info.stats.special_defense / 252 * 100 + "%" }}></span>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="stats_item">
                            <h3>
                                <img src="/icons/spd.svg" alt="" /><span> {"Vitesse : " + pokemon_info.stats.speed + " / 252"} </span>
                            </h3>
                            <div className="stats_bar">
                                <span className="filled" style={{ width: pokemon_info.stats.speed / 252 * 100 + "%" }}></span>
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