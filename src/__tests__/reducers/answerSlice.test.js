import answerSliceReducer, { setAnswer } from './../../redux/answerSlice';

describe('answerReducer', () => {
    const answer = ["P", "U", "Z", "Z", "L", "E"];
    it('should handle setAnswer action', () => {
        const newState = answerSliceReducer([], setAnswer(answer));
        expect (newState).toEqual(["P", "U", "Z", "Z", "L", "E"]);
    });
});