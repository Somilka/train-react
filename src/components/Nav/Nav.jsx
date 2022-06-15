import React from "react";
import { Link } from "react-router-dom";

import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <Link className="nav" to={this.props.to}>{this.props.title}</Link>
            </div>
        );
    }
}

export default Nav;