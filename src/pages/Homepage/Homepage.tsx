import './homepage.css'
import { Link } from "react-router-dom";


function Homepage() {
    return (
        <div className="homepage">
        <Link to="/info">Infopage</Link>
        Homepage
        </div>
    )
  }
  
  export default Homepage