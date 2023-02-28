import { useParams } from 'react-router-dom';
import './infopage.css'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {getOnePokemon} from '../../api/PokemonRepository';

function Infopage() {
  const {id} = useParams();
  console.log(typeof id);
  
  if(!id){
    return (
      <div className="infopage">
        <div className="deco">
            <div className="circle"></div>
            <div className="circle_color-ctn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="right_ctn" >
        <Link to="/home">Homepage</Link>
        Aucun pokémon choisi ...
        </div>
      </div>
    )
  } else {
    // let id_stringed = id[Object.keys(id)[0]]
    let id_stringed = id
    
    console.log(typeof id_stringed);
    
    
    const [pokemon, setOnePokemon] = useState ([]) ;
    
    
    useEffect (() => {
        async function getPokemonInfoLoad () {
            const pokemon = await getOnePokemon(id_stringed!);
            setOnePokemon(pokemon);
            console.log(pokemon);
        }
        getPokemonInfoLoad ();
    }, ); 
    // let prefix = "";
    // if (pokemon.id < 10) {
    //     prefix = "00" + {pokemon.id};
    //   } else if (pokemon.id >= 10 && pokemon.id < 100) {
    //     prefix = "0" + pokemon.id;
    //   }

    return (
      <div className="infopage">
        <div className="deco">
            <div className="circle"></div>
            <div className="circle_color-ctn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        {/* {pokemon.map((pokemon) => ( */}
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
                        {/* <span>{pokemon.stats.attack}</span> */}
                    </div>
                </div>
                <div className="stats_items">
                    <div className="row">
                        <img src="/icons/Def.svg" alt=""/>
                        <span>Def</span>
                    </div>
                    <div className="value">
                        {/* <span>{pokemon.stats.defense}</span> */}
                    </div>
                </div>
                <div className="stats_items">
                    <div className="row">
                        <img src="/icons/Spd.svg" alt=""/>
                        <span>Spd</span>
                    </div>
                    <div className="value">
                        {/* <span>{pokemon.stats.speed}</span> */}
                    </div>
                </div>
                <div className="stats_items">
                    <div className="row">
                        <img src="/icons/Atk Spe.svg" alt=""/>
                        <span>Atk spe</span>
                    </div>
                    <div className="value">
                        {/* <span>{pokemon.stats.special_attack}</span> */}
                    </div>
                </div>
                <div className="stats_items">
                    <div className="row">
                        <img src="/icons/Def Spe.svg" alt=""/>
                     <span>Def spe</span>
                    </div>
                    <div className="value">
                        {/* <span>{pokemon.stats.special_defense}</span> */}
                    </div>
                </div>
             </div>
        </div> 
        {/* ))} */}
    </div>
    )
  }
    
  }
  
  export default Infopage
  