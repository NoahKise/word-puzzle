import React from 'react';
import PropTypes from 'prop-types';
import pizzaSad from './../assets/img/pizzaSad.jpeg';
import goblin from './../assets/img/goblin.png'
import { useEffect } from 'react';
import { useState } from 'react';
import { getGif } from './giphy';

const EndScenario = (props) => {
    const [gif, setGif] = useState();
    useEffect(() => {
        const fetchGif = async () => {
            const result = await getGif(props.unsolved.join(""));
            setGif(result);
        }
        fetchGif();
    }, []); //[] if not, calls every time comp re-renders. [] makes api call 1st time. 

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
            <img src={gif} alt="giphy related to answer"/>
            <h4>{correctWord}</h4>
            
            <h4>{winScoreMsg}</h4>
            <img src={src} alt="something"/>
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