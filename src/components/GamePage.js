import React from "react";
import PropTypes from 'prop-types';

const GamePage = (props) => {
    console.log(props.incorrectGuesses);
    return(
        <React.Fragment>
            <h2>Let's Play!</h2>
            <p> _ _ _ _ _ _ </p>
            <p>Word Bank of incorrectness: {props.incorrectGuesses.join(" ")}</p>
            <p>Incorrect Guesses Remaining: {props.guessesLeft}</p>
        </React.Fragment>
    )
}

GamePage.propTypes = {
    incorrectGuesses: PropTypes.array,
    guessesLeft: PropTypes.number
};

export default GamePage;