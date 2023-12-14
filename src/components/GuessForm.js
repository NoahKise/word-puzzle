import React from 'react';
import PropTypes from 'prop-types';
import { displayError } from '../redux/errorSlice';
import { useDispatch } from 'react-redux';

const GuessForm = (props) => {
    const dispatch = useDispatch();
    function handleGuessInput(e) {
        e.preventDefault();
        const letters = /^[A-Za-z]+$/;
        const inputGuess = e.target.guess.value;
        if (inputGuess.match(letters)) {
            props.onNewGuess({
            guess: e.target.guess.value,
        });
        } else {
            dispatch(displayError("Please enter a valid letter"))
        }
        e.target.guess.value = ''
    }


    return (
        <React.Fragment>
            <form onSubmit={handleGuessInput}>
                <label htmlFor="guess">Guess a letter: </label>
                <input type="text" autoComplete="off" id="guess" name="guess"></input>
                <button type="submit" className='guessSubmitBtn'>Submit</button>
            </form>
        </React.Fragment>
    )
}
GuessForm.propTypes = {
    onNewGuess: PropTypes.func,
};

export default GuessForm;