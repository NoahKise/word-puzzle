import React from "react";
import PropTypes from 'prop-types';


const PlayButton = ({ click }) => {
    return (
        <React.Fragment>
            <button onClick={click}>New Game</button>
        </React.Fragment>
    )
}

PlayButton.propTypes = {
    click: PropTypes.func,
}

export default PlayButton;