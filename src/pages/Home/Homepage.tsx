import './Homepage.css'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';

function Homepage(props: any) {
    const pokemons_bg = ["dracaufeu","amphinobi","mew","pikachu"]
    const choose_pokemon = pokemons_bg[Math.floor(Math.random() * pokemons_bg.length)];
    return (

        <div className="homepage">
            <h1>{props.title}</h1>
            <div className="expli_wrap">
                <div className="expli_el">
                    <img src="/icons/search.svg" alt="Icon de recherche" />
                    <h3>Search a pokemon</h3>
                    <p>Avec ce site vous pourrez rechercher n’importe quel pokémon que vous désirez. Grâce à une recherche optimisée, un système de filtrage par types ainsi que par génération vous pourrez trouver votre bonheur en un rien de temps.</p>
                </div>
                <div className="expli_el">
                    <img src="/icons/team.svg" alt="Icon d'équipe " />
                    <h3>Build your team</h3>
                    <p>Grâce à Digidex, vous pouvez concevoir la team de vos rêves, avec un sytème de génération d’équipe aléatoire. Les forces et les faibles de chacun des pokémons qui la composent. Vous pouvez bien évidemment ajouter le ou les pokémons que vous désirez à cette équipe.</p>
                </div>
                <div className="expli_el">
                    <img src="/icons/brain.svg" alt="Icon de cerveau" />
                    <h3>Memorize types</h3>
                    <p>Digitex propose une carte des faibles de types intéractives. Elle vous permettra de mémoriser l’ensemble des types. Mais aussi voir les pokémons avec le moins de faiblesses de types.</p>
                </div>
                <div className="expli_el">
                    <img src="/icons/heart.svg" alt="Icon de coeur" />
                    <h3>And more...</h3>
                    <p>Ce projet est un projet personnel pour m’initier au framework React. Il utilise une API qui n’est pas ma propriété (retrouvez le lien à gauche). Il est en cours de développement et de réflexion, d’autres fonctionnalités pourraient alors voir le jour plus tard … </p>
                </div> 
            </div>
            <img id="homepage_pokemon" src={`/images/${choose_pokemon}.png`} />
        </div>
    )
}

export default Homepage