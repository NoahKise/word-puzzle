import React from 'react';
import PropTypes from 'prop-types';
import pizzaSad from './../assets/img/pizzaSad.jpeg';
import goblin from './../assets/img/goblin.png'
// import { useDispatch } from 'react-redux';
// import { addScore } from '../redux/totalPointsSlice';

const EndScenario = (props) => {
    // const dispatch = useDispatch();
    let message;
    let correctWord;
    let src;
    let winScoreMsg;
    // let pointsEarned = (props.guessesLeft) * (props.unsolved.length) * 1234;

    if (props.endState === true) {
        message = "Congrats You Win!";
        src = goblin;
        winScoreMsg = <>With <span id='green'>{props.guessesLeft}</span> guesses remaining, you won <span id='green2'>{props.tally}</span> points!</>
        // dispatch(addScore(pointsEarned));
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