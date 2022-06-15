import React from 'react';
import LoginBox from 'components/LoginBox/LoginBox';
import RegBox from 'components/RegBox/RegBox';
import { useAuth } from "hooks/use-auth";
import { useState } from 'react';

import './LoginModal.css';

function LoginModal({show}) {
    // constructor(props) {
        // super(props);
// 
        // this.state = {event: 'login'};
    // }

    const [event, changeEvent] = useState('login');
    const {isAuth, email} = useAuth();

        if (show === true && !isAuth) {
            switch(event) {
                case 'reg':
                    return (
                        <div className="login">
                            <RegBox
                                onAuth={() => {this.props.onAuth()}}
                                login={() => {changeEvent('login')}}
                            />
                        </div>
                    );
                case 'login':
                    return (
                        <div className="login">
                            <LoginBox register={() => {changeEvent('reg')}} />
                        </div>
                    );
                default:
                    break;
            }
        }
}

export default LoginModal;