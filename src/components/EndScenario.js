import React from 'react';
import PropTypes from 'prop-types';
import pizzaSad from './../assets/img/pizzaSad.jpeg';
import goblin from './../assets/img/goblin.png'

const EndScenario = (props) => {
    let message;
    let correctWord;
    let src;
    let winScoreMsg;

    if (props.endState === true) {
        message = "Congrats You Win!";
        src = goblin;
        winScoreMsg = <>With <span id='green'>{props.guessesLeft}</span> guesses remaining, you won <span id='green2'>{props.tally}</span> points!</>
    } else {
        message = "Sorry Try Again";
        correctWord = (
            <React.Fragment>
                The word you were looking for was&nbsp; 
                <em>{props.unsolved.join("")}</em>
            </React.Fragment>
        );
        src = pizzaSad;
        winScoreMsg = <>You lost <span id='purple'>{props.tally}</span> points!</>
    }

    
    
    return(
        <React.Fragment>
            <h3>{message}</h3>
            <h4>{correctWord}</h4>
            <img src={src} alt="something"/>
            
            <h4>{winScoreMsg}</h4>
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