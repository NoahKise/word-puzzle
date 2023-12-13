import endStateSliceReducer, { setEndTrue, setEndFalse } from './../../redux/endStateSlice';

describe('endStateSliceReducer', () => {
    it('should handle setEndTrue action', () => {
        const newState = endStateSliceReducer(false, setEndTrue());
        expect (newState).toEqual(true);
    });
    it('should handle setEndFalse action', () => {
        const newState = endStateSliceReducer(true, setEndFalse());
        expect (newState).toEqual(false);
    });
});