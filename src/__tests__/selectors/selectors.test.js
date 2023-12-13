import { answerSelector } from './../../redux/answerSlice';
import { correctGuessesSelector } from '../../redux/correctGuessesSlice';
import { displayAnswerSelector } from '../../redux/displayAnswerSlice';
import { endStateSelector } from '../../redux/endStateSlice';
import { errorSelector } from '../../redux/errorSlice';
import { gameOverSelector } from '../../redux/gameOverSlice';
import { guessesRemainingSelector } from '../../redux/guessesRemainingSlice';
import { inGameSelector } from '../../redux/inGameSlice';
import { wrongGuessesSelector } from '../../redux/wrongGuessesSlice';

describe('Selector tests', () => {
    it('should show state is selected correctly for answerSelector', () => {
        const state = {
            answer: ["C", "A", "T"],
        };
        const selectedAnswer = answerSelector(state);
        expect(selectedAnswer).toEqual(["C", "A", "T"]);
    });
    it('should show state is selected correctly for correctGuessesSelector', () => {
        const state = {
            correctGuesses: ["C"],
        };
        const selectedAnswer = correctGuessesSelector(state);
        expect(selectedAnswer).toEqual(["C"]);
    });
    it('should show state is selected correctly for displayAnswerSelector', () => {
        const state = {
            displayAnswer: ["C", "A", "T"],
        };
        const selectedAnswer = displayAnswerSelector(state);
        expect(selectedAnswer).toEqual(["C", "A", "T"]);
    });
    it('should show state is selected correctly for endStateSelector', () => {
        const state = {
            endState: false,
        };
        const selectedAnswer = endStateSelector(state);
        expect(selectedAnswer).toEqual(false);
    });
    it('should show state is selected correctly for errorSelector', () => {
        const state = {
            error: 'You can not enter a number',
        };
        const selectedAnswer = errorSelector(state);
        expect(selectedAnswer).toEqual('You can not enter a number');
    });
    it('should show state is selected correctly for gameOverSelector', () => {
        const state = {
            gameOver: false,
        };
        const selectedAnswer = gameOverSelector(state);
        expect(selectedAnswer).toEqual(false);
    });
    it('should show state is selected correctly for guessesRemainingSelector', () => {
        const state = {
            guessesRemaining: 6,
        };
        const selectedAnswer = guessesRemainingSelector(state);
        expect(selectedAnswer).toEqual(6);
    });
    it('should show state is selected correctly for inGameSelector', () => {
        const state = {
            inGame: true,
        };
        const selectedAnswer = inGameSelector(state);
        expect(selectedAnswer).toEqual(true);
    });
    it('should show state is selected correctly for wrongGuessesSelector', () => {
        const state = {
            wrongGuesses: ["Q", "W"],
        };
        const selectedAnswer = wrongGuessesSelector(state);
        expect(selectedAnswer).toEqual(["Q", "W"]);
    });
});

//export const answerSelector = (state) => state.answer;

//mock up state. test selectors to make sure state is selected correctly
// can do all selectors 1 test