import React from "react";
import PropTypes from 'prop-types';


const PlayButton = ({ clickEasy, clickHard }) => {
    return (
        <React.Fragment>
            <button onClick={clickEasy}>New Easy Game</button>
            <button onClick={clickHard}>New Hard Game</button>
        </React.Fragment>
    )
}

PlayButton.propTypes = {
    clickEasy: PropTypes.func,
    clickHard: PropTypes.func,
}

export default PlayButton;