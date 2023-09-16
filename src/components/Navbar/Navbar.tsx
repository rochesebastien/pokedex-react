
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav_ctn">
            <div className="nav_logo_ctn">
                <img src="icon.png" alt="Pokédex" className="nav_logo" />
            </div>
            <ul className="nav_links_ctn">
                <li className="nav_link"><Link to="/">Accueil</Link></li>
                <li className="nav_link"><Link to="/about">Les Pokémons</Link></li>
                <li className="nav_link"><Link to="/contact">Votre équipe</Link></li>
                <li className="nav_link"><Link to="/contact">Table des types</Link></li>
            </ul>
            <div className="nav_mode_switch_ctn">
                <span className="on">On</span>
                <span className="">Off</span>
            </div>
            <div className="nav_info_ctn">
                <span>Github Project</span>
                <span>See my Portfolio</span>
                <span>API used</span>
            </div>   
            </div>
        </nav>
    )
}

export default Navbar
