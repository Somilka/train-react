import React from "react";
import StartTrainBtn from "components/StartTrainBtn/StartTrainBtn";

import './Home.css';

class Home extends React.Component {
    render() {
        // if (this.props.show === true) {
            return (
                <div className="home">
                    <StartTrainBtn />
                </div>
            );
        // }
    }
}

export default Home;