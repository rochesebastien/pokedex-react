import { useParams } from 'react-router-dom';
import './infopage.css'
import { Link } from "react-router-dom";

function Infopage() {
  let {id}= useParams();
  if(!id){
    return (
      <div className="infopage">
        <Link to="/home">Homepage</Link>
        InfoPage sur les pokemons
      </div>
    )
  } else {
    return (
      <div className="infopage">
        <Link to="/home">Homepage</Link>
        InfoPage sur le pokemon {id}
      </div>
    )
  }
    
  }
  
  export default Infopage
  