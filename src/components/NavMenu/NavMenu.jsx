import React from "react";
import Nav from "../Nav/Nav";

import './NavMenu.css';

class NavMenu extends React.Component {
    render() {
        return (
            <div className="nav-menu">
                <Nav title="Your Train" to="/" />
                <Nav title="Мои тренировки" to="/" />
                <Nav title="Шаблоны" to="/" />
            </div>
        );
    }
}

export default NavMenu;