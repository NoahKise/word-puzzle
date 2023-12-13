import correctGuessesReducer, {addCorrectLetter, returnDefaultCorrect} from '../../redux/correctGuessesSlice'

describe('correctGuessesReducer', () => {
    const guessArray = ["_", "_", "Y"]
    it('should handle addCorrectLetter action', () => {
        const newState = correctGuessesReducer([], addCorrectLetter(guessArray));
        expect (newState).toEqual(["_", "_", "Y"])
    });
    it('should handle returnDefaultCorrect action', () => {
        const newState = correctGuessesReducer([], returnDefaultCorrect());
        expect (newState).toEqual([])
    });
});