import React from "react";
import { Link } from 'react-router-dom'

import './StartTrainBtn.css'

class StartTrainBtn extends React.Component {
    render() {
        return (
            <Link className="start-train-btn" to="/startTrain">Начать тренировку</Link>
        );
    }
}

export default StartTrainBtn;