import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form/Form';
import { setUser } from 'store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();

    
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
                // this.props.onAuth();
            })
            .catch(console.error)
    }

    return (
        
        <Form
            title="Зарегистрироваться"
            handleClick={handleRegister}
        >

        </Form>
    )
}

export { SignUp }