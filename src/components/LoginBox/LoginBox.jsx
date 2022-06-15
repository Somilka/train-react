import React from "react";
import {Login} from "../Login/Login";

import './LoginBox.css';

class LoginBox extends React.Component {
    render() {
        return (
            <div className="login-box box">
                <h1>Вход</h1>
                    <Login />
                <p>
                    или <span
                        className="or"
                        onClick={() => {this.props.register()}}
                    >зарегистрируйтесь</span>
                </p>
            </div>
        );
    }
}

export default LoginBox;