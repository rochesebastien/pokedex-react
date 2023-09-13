
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
                <Link to='' className="">
                    <img src="icons/btns/poke_by_types.png" alt="" />
                </Link>
                <Link to='/search' className="">
                    <img src="icons/btns/poke_search.png" alt="" />
                </Link>
                <Link to='/randomteam' className="">
                    <img src="icons/btns/poke_random_team.png" alt="" />
                </Link>
                <Link to='' className="">
                    <img src="icons/btns/poke_by_gen.png" alt="" />
                </Link>
                <Link to='/typestable' className="">
                    <img src="icons/btns/poke_table_types.png" alt="" />
                </Link>
    </nav>
  )
}

export default Navbar
