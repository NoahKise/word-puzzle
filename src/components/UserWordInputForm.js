import React from "react";
import { displayError } from "../redux/errorSlice";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

const UserWordInputForm = (props) => {
    const dispatch = useDispatch();
    function handleWordInput(e) {
        e.preventDefault();
        const letters = /^[A-Za-z]+$/;
        const wordInput = e.target.inputWord.value;
        console.log(wordInput);
        if (wordInput.match(letters)) {
            props.onWordChosen({
                wordChosen: wordInput,
            });
        } else {
            dispatch(displayError("Please enter a valid word"))
        }
        
        e.target.inputWord.value = '';
    }

    return (
        <React.Fragment>
            <form onSubmit={handleWordInput}>
                <label htmlFor="inputWord">Player 1: Enter a word for Player 2 to guess: </label>
                <input type="text" id="inputWord" name="inputWord"></input>
                <button type="submit">Submit secret word</button>
            </form>
        </React.Fragment>
    )
}
UserWordInputForm.propTypes = {
    onWordChosen: PropTypes.func,
    startGame: PropTypes.func,

}
export default UserWordInputForm;