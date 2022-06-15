import './App.css';
import React, {useState} from 'react';
import Header from 'pages/Header/Header';
import Main from 'pages/Main/Main';
import LoginModal from 'components/LoginModal/LoginModal';
import { useAuth } from "hooks/use-auth";
// import * as firebase from './firebase';
// import app from './firebase';

function App() {
  // firebase.auth().onAuthStateChanged(function(user) {
    // if (user) {
      // console.log('logged in');
      // User is signed in.
    // } else {
      // User is not signed in.
    // }
  // });
  // constructor(props) {
  //   super(props);

  //   this.state = {showLogin: false}
  // }
  const {isAuth, email} = useAuth();
  const [showLogin, changeShowLogin] = useState(false);
  // console.log(isAuth);
  // render() {
    return (
      <div className="App">
        <LoginModal
          closeLogin={() => {changeShowLogin(false)}}
          show={showLogin}
        />
        <Header logged={isAuth} openLogin={() => {changeShowLogin(true)}} />
        <Main />
      </div>
    );
  // }
}

export default App;
