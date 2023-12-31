import { configureStore } from "@reduxjs/toolkit";
import inGameSliceReducer from './inGameSlice';
import gameOverSliceReducer from "./gameOverSlice";
import wrongGuessesSliceReducer from "./wrongGuessesSlice";
import correctGuessesSliceReducer from "./correctGuessesSlice";
import guessesRemainingSliceReducer from "./guessesRemainingSlice";
import displayAnswerSliceReducer from "./displayAnswerSlice";
import endStateSliceReducer from "./endStateSlice";
import errorSliceReducer from "./errorSlice";
import answerSliceReducer from "./answerSlice";
import wordInputFormVisibleSliceReducer from "./wordInputFormVisibleSlice";
import totalPointsSliceReducer from "./totalPointsSlice";
import currentPointsSliceReducer from "./currentPointsSlice";

export const store = configureStore({
    reducer: {
        inGame: inGameSliceReducer,
        gameOver: gameOverSliceReducer,
        wrongGuesses: wrongGuessesSliceReducer,
        correctGuesses: correctGuessesSliceReducer,
        guessesRemaining: guessesRemainingSliceReducer,
        displayAnswer: displayAnswerSliceReducer,
        endState: endStateSliceReducer,
        error: errorSliceReducer,
        answer: answerSliceReducer,
        wordInputFormVisible: wordInputFormVisibleSliceReducer,
        totalPoints: totalPointsSliceReducer,
        currentPoints: currentPointsSliceReducer,
    }
});