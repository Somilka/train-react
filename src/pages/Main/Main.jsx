import React from "react";
import Home from "../Home/Home";
import StartTrain from "../../components/StartTrain/StartTrain";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from "hooks/use-auth";

import './Main.css';

const Main = () => {
    // render() {



        const {isAuth, email} = useAuth();

        // return isAuth ? (
            // <div>welcome</div>
        // ) : (
            // <div>login</div>
        // )

        return (
            <div className="main">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/startTrain" element={<StartTrain />} />
                    </Routes>
                </div>
            </div>
        );
    // }
}

export default Main;