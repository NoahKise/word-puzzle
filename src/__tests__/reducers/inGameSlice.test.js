import inGameSliceReducer, { setStartTrue } from '../../redux/inGameSlice'; 
// import the specific reducer and action function to test

describe('inGameReducer', () => {
    it('should handle setStartTrue action', () => {
        //const initialState = false;
        //const action = setStartTrue();
        const newState = inGameSliceReducer(false, setStartTrue());
        expect (newState).toEqual(true);
    });
});

