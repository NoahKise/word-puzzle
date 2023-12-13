import React from 'react';
import PropTypes from 'prop-types';

const EndScenario = (props) => {
    let message;
    let correctWord;
    if (props.endState === true) {
        message = "Congrats You Win!";
    } else {
        message = "Sorry Try Again";
        correctWord = (
            <React.Fragment>
                The word you were looking for was&nbsp; 
                <em>{props.unsolved.join("")}</em>
            </React.Fragment>
        );
    }
    
    return(
        <React.Fragment>
            <h3>{message}</h3>
            <h4>{correctWord}</h4>
            <button onClick={props.click}>Play again</button> 
        </React.Fragment>
    )
}

EndScenario.propTypes = {
    unsolved: PropTypes.array,
    click: PropTypes.func,
}
export default EndScenario;