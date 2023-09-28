import React, { useState, useEffect } from 'react';
import { Pokemon } from '../../../types/Pokemon.types';
import './PokemonInfo.css';

function PokemonInfo(props: any) {
    const [pokemon_info, setPokemonInfo] = useState<Pokemon | null>(null);
    const health = 78 / 252 * 100;
    const attack = 84 / 252 * 100;
    const def = 78 / 252 * 100;
    const attackspe = 109 / 252 * 100;
    const defspe = 85 / 252 * 100;
    const speed = 100 / 252 * 100;
    console.log(props);
    console.log(pokemon_info);


    const handlePokemonSelection = () => {
        setPokemonInfo(null);
    }

    return (
        pokemon_info ? (
            <div className="pokemon_info_ctn">
                <div className="title_ctn">
                    <h1>Dracaufeu</h1>
                </div>
                <button className='close_btn' onClick={() => handlePokemonSelection(pokemon)}>X</button>
                <ul className="pokemon_info_stats">
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: health + "%" }}>
                                <img src="/icons/heart.svg" alt="" />
                                <span>78</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: attack + "%" }}>
                                <img src="/icons/Atk.svg" alt="" />
                                <span>84</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: def + "%" }}>
                                <img src="/icons/Def.svg" alt="" />
                                <span>78</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: attackspe + "%" }}>
                                <img src="/icons/Atk Spe.svg" alt="" />
                                <span>109</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: defspe + "%" }}>
                                <img src="/icons/Def Spe.svg" alt="" />
                                <span>85</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="stats_item">
                            <div className="filled" style={{ width: speed + "%" }}>
                                <img src="/icons/Spd.svg" alt="" />
                                <span>100</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <img src="/images/dracaufeu.png" id="pokemon_info_img" />
                <span id="pokemon_info_id">336</span>
            </div>
        ) : null
    );
}

export default PokemonInfo