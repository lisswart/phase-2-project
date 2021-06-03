import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Dictionary</NavLink>
            <NavLink to="../poetry-components/displayPanel-poetry/DisplayPanelPoetry">Poetry Collection</NavLink>
        </nav>
    );
}

export default NavBar;