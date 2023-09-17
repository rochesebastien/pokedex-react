import './Homepage.css'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';

function Homepage(props : any) {

    return (

        <div className="homepage">
            <h1>{props.title}</h1>
            <div className="expli_wrap">
                <div className="expli_el">
                    <h3>Search a pokemon</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti natus harum tempore consequuntur ipsum sapiente officiis illum modi veniam!</p>
                </div>
                <div className="expli_el">
                    <h3>Build your team</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti natus harum tempore consequuntur ipsum sapiente officiis illum modi veniam!</p>
                </div>
                <div className="expli_el">
                    <h3>Memorize types</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti natus harum tempore consequuntur ipsum sapiente officiis illum modi veniam!</p>
                </div>
                <div className="expli_el">
                    <h3>And more...</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti natus harum tempore consequuntur ipsum sapiente officiis illum modi veniam!</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage