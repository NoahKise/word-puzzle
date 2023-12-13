import errorSliceReducer, { displayError } from '../../redux/errorSlice'

describe('errorReducer', () => {
    it('should handle displayError action', () => {
        const newState = errorSliceReducer('', displayError('error message'));
        expect (newState).toEqual("error message");
    })
})