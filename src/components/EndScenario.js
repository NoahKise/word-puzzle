import React from 'react';
import PropTypes from 'prop-types';
import pizzaSad from './../assets/img/pizzaSad.jpeg';
import goblin from './../assets/img/goblin.png'

const EndScenario = (props) => {
    let message;
    let correctWord;
    let src;

    if (props.endState === true) {
        message = "Congrats You Win!";
        src = goblin;
    } else {
        message = "Sorry Try Again";
        correctWord = (
            <React.Fragment>
                The word you were looking for was&nbsp; 
                <em>{props.unsolved.join("")}</em>
            </React.Fragment>
        );
        src = pizzaSad;
    }
    let pointsEarned = (props.guessesLeft) * (props.unsolved.length) * 1234;
    
    return(
        <React.Fragment>
            <h3>{message}</h3>
            <h4>{correctWord}</h4>
            <img src={src} alt="something"/>
            <h4>With {props.guessesLeft} guesses remaining, you won {pointsEarned} points!</h4>
            <button onClick={props.easyClick}>Play again easy mode</button> 
            <button onClick={props.hardClick}>Play again hard mode</button>
            <button onClick={props.twoPlayerClick}>Play again 2 Player</button>  
        </React.Fragment>
    )
}

EndScenario.propTypes = {
    guessesLeft: PropTypes.number,
    unsolved: PropTypes.array,
    easyClick: PropTypes.func,
    hardClick: PropTypes.func,
    twoPlayerClick: PropTypes.func,
}
export default EndScenario;