import React from "react";
import {SignUp} from "../SignUp/SignUp";

import './RegBox.css';

class RegBox extends React.Component {
    render() {
        return (
            <div className="reg-box box">
                <h1>Зарегистрироваться</h1>
                    <SignUp onAuth={() => {this.props.onAuth()}} />
                <p>
                    Или <span
                        className="or"
                        onClick={() => {this.props.login()}}
                    >войти</span>
                </p>
            </div>
        );
    }
}

export default RegBox;