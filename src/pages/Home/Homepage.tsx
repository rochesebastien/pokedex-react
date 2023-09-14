import './Homepage.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

function Homepage() {
    const [isOpen, setIsOpen] = useState(false);


    const openPokdedex = () => {
        let className = document.querySelector(".coverclap_ctn");
        className?.classList.toggle("coverclap_open")
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
            <Navbar />
            <div className="screen_control">
                {/* Voir les pokemons de tout un type */}
                {/* Recherchez un pokedemon par son nom*/}
                {/* Voir tous les pookemons d'une generation*/}
                {/* Tables des faiblesses de types */}
                {/* Génére une équipe random */}
                <p>Bienvenue sur la version en ligne du Pokédex !</p>
                <p>Appuyez sur le bouton de votre choix. </p>
            </div>
        </div>
    )
}

export default Homepage