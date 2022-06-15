import React from "react";

import './StartTrain.css';

class CurrentTrain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    render() {
        // if (this.props.show === true) {
            return (
                <div className="current-train">
                    <div className="current-train__title">Выбери тренировку</div>
                </div>
            );
        // }
    }
}

export default CurrentTrain;