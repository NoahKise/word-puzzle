import guessesRemainingReducer, { decrementGuess, returnTo6 } from './../../redux/guessesRemainingSlice';

describe('guessesRemainingReducer', () => {
    it('should handle decrement guess action', () => {
        const newState = guessesRemainingReducer(6, decrementGuess());
        expect(newState).toEqual(5);
    });
    it('should handle returnTo6 action', () => {
        const newState = guessesRemainingReducer(0, returnTo6());
        expect(newState).toEqual(6);
    });
});