import './Homepage.css'
import { Link } from "react-router-dom";
import { useState} from 'react';

function Homepage() {
    const [isOpen, setIsOpen] = useState(false);
    

    const openPokdedex = () => {
        let className = document.querySelector(".coverclap_ctn");
        className?.classList.add("coverlap_open")
        setTimeout(() => {
            className?.classList.add("hide")
        }, 1000);
      };

    return (
        
        <div className="homepage">
         <div className="coverclap_ctn">
                <div className="coverclap_left"></div>
                <div className="coverclap_right">
                     <button onClick={openPokdedex}></button>
                </div>
            </div>

            <div className="control_panel_ctn">
                {/* Voir les pokemons de tous un type */}
                {/* Recherchez un pokedemon par son nom*/}
                {/* Voir tous les pookemons d'une generation*/}
                {/* Tables des faiblesses de types */}
                {/* Génére une équipe random */}
                <div className="button_action_pannel">
                    <img src="/icons/fire-line.svg" alt=""/>
                    <span>All pokemons from one type</span>
                </div>
                <div className="button_action_pannel">
                    <img src="/icons/file-list-2-line.svg" alt=""/>
                    <span>All pokemons from a generation</span>
                </div>
                <div className="button_action_pannel">
                    <img src="/icons/team-line.svg" alt=""/>
                    <span>Random Team</span>
                </div>
                <div className="button_action_pannel">
                    <img src="/icons/information-line.svg" alt=""/>
                    <span>Pokemon Stats</span>
                </div>
                <div className="button_action_pannel">
                    <img src="icons/sword-line.svg" alt=""/>
                    <span>Types table </span>
                </div>
                <div className="button_action_pannel">
                    <img src="/icons/search-eye-line.svg" alt=""/>
                    <span>Search </span>
                </div>
            </div>

        <Link to="/info">Infopage</Link>
        Homepage

        </div>
    )
  }
  
  export default Homepage