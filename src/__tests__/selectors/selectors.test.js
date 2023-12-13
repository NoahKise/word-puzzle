
//export const inGameSelector = (state) => state.inGame;
//mock up state. test selectors to make sure state is selected correctly
// can do all selectors 1 test

import inGameSliceReducer, { setStartTrue } from '../../redux/inGameSlice';
// import the specific reducer and action function to test

describe('inGameReducer', () => {
    it('should handle setStartTrue action', () => {
        //const initialState = false;
        //const action = setStartTrue();
        const newState = inGameSliceReducer(false, setStartTrue());
        expect (newState).toEqual(true);
    })
});