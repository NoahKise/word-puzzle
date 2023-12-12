import React from "react";
import PropTypes from 'prop-types';

const GamePage = (props) => {
    return(
        <React.Fragment>
            <h2>Let's Play!</h2>
            <p>{props.displayAnswer.join(' ')}</p> 
            <p>Word Bank of incorrectness: {props.incorrectGuesses.join(" ")}</p>
            <p>Incorrect Guesses Remaining: {props.guessesLeft}</p>
            <h3>{props.dubLetResponse}</h3>
        </React.Fragment>
    )
}

GamePage.propTypes = {
    dubLetResponse: PropTypes.string,
    incorrectGuesses: PropTypes.array,
    guessesLeft: PropTypes.number
};

export default GamePage;