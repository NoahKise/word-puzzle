import displayAnswerSliceReducer, { userDisplay } from './../../redux/displayAnswerSlice';

describe('displayAnswerReducer', () => {
    const payload = ["C", "A", "T"];
    it('should handle userDisplay action', () => {
        const newState = displayAnswerSliceReducer([], userDisplay(payload));
        expect (newState).toEqual(["C", "A", "T"])
    });
});