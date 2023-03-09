import './Homepage.css'
import { Link } from "react-router-dom";
import { useState} from 'react';

function Homepage() {
    const [isOpen, setIsOpen] = useState(false);
    

    const openPokdedex = () => {
        let className = document.querySelector(".coverclap_ctn");
        className?.classList.toggle("coverlap_open")
        setTimeout(() => {
            className?.classList.toggle("hide")
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
                <Link to='' className="button_action_pannel">
                    <img src="/icons/fire-line.svg" alt=""/>
                    <span>Tous les pokémons d'un type</span>
                </Link>
                <Link to='' className="button_action_pannel">
                    <img src="/icons/file-list-2-line.svg" alt=""/>
                    <span>Tous les pokémons d'une génération</span>
                </Link>
                <Link to='/randomteam' className="button_action_pannel">
                    <img src="/icons/team-line.svg" alt=""/>
                    <span>Equipe Aléatoire</span>
                </Link>
                <Link to='/stats' className="button_action_pannel">
                    <img src="/icons/information-line.svg" alt=""/>
                    <span>Stats d'un pokemon</span>
                </Link>
                <Link to='/typestable' className="button_action_pannel">
                    <img src="icons/sword-line.svg" alt=""/>
                    <span>Table des types </span>
                </Link>
                <Link to='/search' className="button_action_pannel">
                    <img src="/icons/search-eye-line.svg" alt=""/>
                    <span>Recherche </span>
                </Link>
            </div>

        <Link to="/info">Infopage</Link>
        Homepage

        </div>
    )
  }
  
  export default Homepage