import gameOverSliceReducer, { setGameOverTrue, setGameOverFalse } from './../../redux/gameOverSlice';

describe('gameOverSliceReducer', () => {
    it('should handle setGameOverTrue action', () => {
        const newState = gameOverSliceReducer(false, setGameOverTrue());
        expect (newState).toEqual(true);
    });
    it('should handle setGameOverFalse action', () => {
        const newState = gameOverSliceReducer(true, setGameOverFalse());
        expect (newState).toEqual(false);
    });
});