import React, {useState} from 'react';
import './Form.css'

const Form = ({title, handleClick, error}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className='login__form'>
            <div className="login__inputs">
            <input
                className='login__input'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Почта"
            />
            <input
                className='login__input'
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Пароль"
            />
            </div>
            <div className="error">{error}</div>
            <button
                className='login__btn'
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
    );
}

export {Form};