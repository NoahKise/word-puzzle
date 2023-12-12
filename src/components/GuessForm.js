import React from 'react';

const GuessForm = () => {
    return(
        <React.Fragment>
            <label htmlFor="guess">Guess a letter: </label>
            <input type="text" id="guess" name="guess"></input>
            <button type="submit">Submit</button>
        </React.Fragment>
    )
}
export default GuessForm;