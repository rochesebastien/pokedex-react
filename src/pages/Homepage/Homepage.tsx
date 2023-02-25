import './homepage.css'
import { Link } from "react-router-dom";
import PokemonList from '../../components/PokemonList/PokemonList';

function Homepage() {
    return (
      <div className="homepage">
        <div className="left">
        <PokemonList />
        </div>
        <div className="right">
        <Link to="/info">Infopage</Link>
        Homepage
        </div>
        
        
      </div>
    )
  }
  
  export default Homepage