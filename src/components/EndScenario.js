import React from 'react';
import PropTypes from 'prop-types';

const EndScenario = (props) => {
    let message;
    if (props.endState === true) {
        message = "Congrats You Win!";
    } else {
        message = "Sorry Try Again";
    }
    
    return(
        <React.Fragment>
            <h3>{message}</h3>
            <button onClick={props.click}>Play again</button> 
        </React.Fragment>
    )
}

EndScenario.propTypes = {
    click: PropTypes.func,
}
export default EndScenario;