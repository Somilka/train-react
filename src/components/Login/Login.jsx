import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form/Form';
import { setUser } from 'store/slices/userSlice';
import { useState } from "react";

const Login = () => {
    const dispatch = useDispatch();

    const [errorMsg, changeErrorMsg] = useState('');
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
            })
            .catch(err => {
                changeErrorMsg('Ошибка входа!');
                console.log(err.code);
                // switch(err.code) {
                //     case 'auth/user-not-found':
                //         changeErrorMsg('Пользователь не найден!');
                //         console.log('error: ' + errorMsg);
                //         break;
                // }
            })
    }

    return (
        <Form
            title="Войти"
            handleClick={handleLogin}
            error={errorMsg}
        >

        </Form>
    );
}

export { Login }