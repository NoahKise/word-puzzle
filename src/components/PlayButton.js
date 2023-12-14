import React from "react";
import PropTypes from 'prop-types';


const PlayButton = ({ clickEasy, clickHard, click2P }) => {
    return (
        <React.Fragment>
            <button onClick={clickEasy}>New Easy Game</button>
            <button onClick={clickHard}>New Hard Game</button>
            <button onClick={click2P}>New 2 Player Game</button>

            
        </React.Fragment>
    )
}

PlayButton.propTypes = {
    click2P: PropTypes.func,
    clickEasy: PropTypes.func,
    clickHard: PropTypes.func,
}

export default PlayButton;