import React from "react";

import './OpenLogin.css';

class OpenLogin extends React.Component {
    render() {
        if (!this.props.logged) {
            return (
                <div className="login-btn" onClick={() => {this.props.openLogin()}}>Войти</div>
            );
        }
    }
}

export default OpenLogin;