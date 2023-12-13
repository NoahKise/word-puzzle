import wrongGuessesSliceReducer, { addWrongLetter, returnDefaultWrong } from './../../redux/wrongGuessesSlice';

describe('wrongGuessesSliceReducer', () => {
    it('should handle addWrongLetter action', () => {
        const payload = ["C"];
        const newState = wrongGuessesSliceReducer([], addWrongLetter(payload));
        expect(newState).toEqual["C"];
    });
    it('should handle returnDefaultWrong action', () => {
        const newState = wrongGuessesSliceReducer([], addWrongLetter());
        expect(newState).toEqual([]);
    });
});