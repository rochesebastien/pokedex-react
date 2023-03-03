import './PokemonList.css'
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {getOnePokemon} from '../../api/PokemonRepository';


function PokemonInfo(){
    const {id} = useParams();
    const [pokemon, setPokemon] = useState ([]) ;


    
    useEffect (() => {
        async function getPokemonLoad () {
            const pokemons_data = await getOnePokemon(id!) ;
            setPokemon(pokemons_data) ;
        }
        getPokemonLoad ();
    },[id]);

    return (
        <div className="right_ctn" >
                <div className="pokemon-name-ctn">
                    <span className="id">{pokemon.id} </span>
                    <span>  -  </span>
                    <span className="name">{pokemon.name}</span>
                    
                </div>
                <div className="stats_ctn">
                    <div className="stats_items">
                        <div className="row">
                            <img src="/icons/Atk.svg" alt=""/>
                            <span>Atk</span>
                        </div>
                        <div className="value">
                            <span>{pokemon.stats.attack}</span>
                        </div>
                    </div>
                    <div className="stats_items">
                        <div className="row">
                            <img src="/icons/Def.svg" alt=""/>
                            <span>Def</span>
                        </div>
                        <div className="value">
                            <span>{pokemon.stats.defense}</span>
                        </div>
                    </div>
                    <div className="stats_items">
                        <div className="row">
                            <img src="/icons/Spd.svg" alt=""/>
                            <span>Spd</span>
                        </div>
                        <div className="value">
                            <span>{pokemon.stats.speed}</span>
                        </div>
                    </div>
                    <div className="stats_items">
                        <div className="row">
                            <img src="/icons/Atk Spe.svg" alt=""/>
                            <span>Atk spe</span>
                        </div>
                        <div className="value">
                            <span>{pokemon.stats.special_attack}</span>
                        </div>
                    </div>
                    <div className="stats_items">
                        <div className="row">
                            <img src="/icons/Def Spe.svg" alt=""/>
                         <span>Def spe</span>
                        </div>
                        <div className="value">
                            <span>{pokemon.stats.special_defense}</span>
                        </div>
                    </div>
                 </div>
            </div>
    )
}

export default PokemonInfo