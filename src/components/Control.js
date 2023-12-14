import React from "react";
import GuessForm from "./GuessForm";
import GamePage from "./GamePage";
import EndScenario from "./EndScenario";
import PlayButton from "./PlayButton";
import wordList from "./words";
import UserWordInputForm from "./UserWordInputForm";
import TotalPoints from "./TotalPoints";
import pizza6 from './../assets/img/pizza6.jpeg';
import pizza5 from './../assets/img/pizza5.jpeg';
import pizza4 from './../assets/img/pizza4.jpeg';
import pizza3 from './../assets/img/pizza3.jpeg';
import pizza2 from './../assets/img/pizza2.jpeg';
import pizza1 from './../assets/img/pizza1.jpeg';

import { useSelector } from 'react-redux';

import { inGameSelector } from "../redux/inGameSlice";
import { gameOverSelector } from "../redux/gameOverSlice";
import { wrongGuessesSelector } from "../redux/wrongGuessesSlice";
import { correctGuessesSelector } from "../redux/correctGuessesSlice";
import { guessesRemainingSelector } from "../redux/guessesRemainingSlice";
import { displayAnswerSelector } from "../redux/displayAnswerSlice";
import { endStateSelector } from "../redux/endStateSlice";
import { errorSelector } from "../redux/errorSlice";
import { answerSelector } from "../redux/answerSlice";
import { wordInputFormVisibleSelector } from "../redux/wordInputFormVisibleSlice";
import { totalPointsSelector } from "../redux/totalPointsSlice";
import { currentPointsSelector } from "../redux/currentPointsSlice";

import { useDispatch } from 'react-redux';

import { setAnswer } from './../redux/answerSlice';
import { addCorrectLetter, returnDefaultCorrect } from "../redux/correctGuessesSlice";
import { userDisplay } from "../redux/displayAnswerSlice";
import { setEndTrue, setEndFalse } from "../redux/endStateSlice";
import { displayError } from "../redux/errorSlice";
import { setGameOverTrue, setGameOverFalse } from "../redux/gameOverSlice";
import { decrementGuess, returnTo6 } from "../redux/guessesRemainingSlice";
import { setStartTrue, setStartFalse } from "../redux/inGameSlice";
import { addWrongLetter, returnDefaultWrong } from "../redux/wrongGuessesSlice";
import { setInputFormVisibleTrue, setInputFormVisibleFalse } from "../redux/wordInputFormVisibleSlice"
import { addScore } from "../redux/totalPointsSlice";
import { currentScore } from "../redux/currentPointsSlice";

import easyWordList from "./easyWords";


const Control = () => {
    const dispatch = useDispatch();

    let pointsEarned = 0;

    const inGame = useSelector(inGameSelector);
    const gameOver = useSelector(gameOverSelector);
    const wrongGuesses = useSelector(wrongGuessesSelector);
    const correctGuesses = useSelector(correctGuessesSelector);
    const guessesRemaining = useSelector(guessesRemainingSelector);
    const displayAnswer = useSelector(displayAnswerSelector);
    const endState = useSelector(endStateSelector);
    const error = useSelector(errorSelector);
    const answer = useSelector(answerSelector);
    const wordInputFormVisible = useSelector(wordInputFormVisibleSelector);
    const totalPoints = useSelector(totalPointsSelector);
    const currentPoints = useSelector(currentPointsSelector);

    const newEasyGame = () => {
        dispatch(setStartTrue()); // setInGame(true);
        dispatch(returnDefaultWrong()); //setWrongGuesses([]);
        dispatch(returnDefaultCorrect());  //setCorrectGuesses([]);
        dispatch(returnTo6()); //setGuessesRemaining(6);
        dispatch(userDisplay([]));  //setDisplayAnswer([]);
        dispatch(setEndFalse());  //setEndState(false);
        dispatch(setGameOverFalse()); //setGameOver(false);

        const randomNumber = Math.floor(Math.random() * easyWordList.length);
        const randoAnswer = (easyWordList[randomNumber]).toUpperCase().split('')
        dispatch(setAnswer(randoAnswer)) //setAnswer(randoAnswer);
        let underscores = [];
        for (let i = 0; i < randoAnswer.length; i++) {
            underscores.push('_');
        }
        // console.log(randoAnswer);
        dispatch(userDisplay(underscores));    //setDisplayAnswer(underscores);
    };

    const newHardGame = () => {
        dispatch(setStartTrue()); // setInGame(true);
        dispatch(returnDefaultWrong()); //setWrongGuesses([]);
        dispatch(returnDefaultCorrect());  //setCorrectGuesses([]);
        dispatch(returnTo6()); //setGuessesRemaining(6);
        dispatch(userDisplay([]));  //setDisplayAnswer([]);
        dispatch(setEndFalse());  //setEndState(false);
        dispatch(setGameOverFalse()); //setGameOver(false);

        const randomNumber = Math.floor(Math.random() * wordList.length);
        const randoAnswer = (wordList[randomNumber]).toUpperCase().split('')
        dispatch(setAnswer(randoAnswer)) //setAnswer(randoAnswer);
        let underscores = [];
        for (let i = 0; i < randoAnswer.length; i++) {
            underscores.push('_');
        }
        // console.log(randoAnswer);
        dispatch(userDisplay(underscores));    //setDisplayAnswer(underscores);
    };

    const displayInputForm = () => {
        dispatch(setInputFormVisibleTrue());
        dispatch(setGameOverFalse());
        dispatch(setStartFalse())
    }

    const new2PGame = (chosenWord) => {
        dispatch(setInputFormVisibleFalse());
        dispatch(setStartTrue()); // setInGame(true);
        dispatch(returnDefaultWrong()); //setWrongGuesses([]);
        dispatch(returnDefaultCorrect());  //setCorrectGuesses([]);
        dispatch(returnTo6()); //setGuessesRemaining(6);
        dispatch(userDisplay([]));  //setDisplayAnswer([]);
        dispatch(setEndFalse());  //setEndState(false);
        dispatch(setGameOverFalse()); //setGameOver(false);

        //import the user submitted word
        const userAnswer = chosenWord.toUpperCase().split('')
        dispatch(setAnswer(userAnswer))
        let underscores = [];
        for (let i = 0; i < userAnswer.length; i++) {
            underscores.push('_');
        }
        console.log(userAnswer);
        dispatch(userDisplay(underscores));
    }

    const getIndices = (array, letter) => {
        let indices = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === letter) {
                indices.push(i);
            }
        }
        return indices;
    }
    // const handleSetWord = (wordChosen) => {
    //     console.log(wordChosen.wordChosen)
    //     return wordChosen.wordChosen;
    // }

    const handleGuess = (guess) => {
        dispatch(displayError('')); //setError('');
        if ((guess.guess).length === 1) {
            const upperGuess = (guess.guess).toUpperCase();
            if (correctGuesses.includes(upperGuess) || wrongGuesses.includes(upperGuess)) {
                dispatch(displayError("You've already guessed that letter")); //setError("You've already guessed that letter")
            } else if (answer.includes(upperGuess)) {
                const displayAnswerIndex = getIndices(answer, upperGuess);
                let displayInProgress = [...displayAnswer]
                for (let i = 0; i < displayAnswerIndex.length; i++) {
                    displayInProgress.splice(displayAnswerIndex[i], 1, upperGuess)
                }
                const newCorrectGuessArray = [...correctGuesses, upperGuess];
                dispatch(addCorrectLetter(newCorrectGuessArray)); //setCorrectGuesses(newCorrectGuessArray);
                dispatch(userDisplay(displayInProgress)); //setDisplayAnswer(displayInProgress)
                if (answer.join('') === displayInProgress.join('')) {
                    dispatch(setGameOverTrue()); //setGameOver(true)
                    dispatch(setEndTrue()); //setEndState(true)
                    pointsEarned = (guessesRemaining) * (answer.length) * 1234;
                    dispatch(addScore(pointsEarned));
                    dispatch(currentScore(pointsEarned))  //WIP
                }
            } else {
                console.log(answer);
                const newWrongGuessArray = [...wrongGuesses, upperGuess];
                dispatch(addWrongLetter(newWrongGuessArray)); //setWrongGuesses(newWrongGuessArray);
                dispatch(decrementGuess()); //setGuessesRemaining(guessesRemaining - 1)
                if (guessesRemaining === 1) {
                    dispatch(setGameOverTrue()); //setGameOver(true)
                    pointsEarned = (answer.length) * -1234;
                    dispatch(addScore(pointsEarned));
                    dispatch(currentScore(pointsEarned))
                }
            }

        } else {
            dispatch(displayError("Please enter a single letter")); //setError("Please enter a single letter");
        }
    }

    let visibleState = null;

    const setSrc = () => {
        let src;
        if (guessesRemaining === 6) {
            src = pizza6;
            return src;
        } else if (guessesRemaining === 5) {
            src = pizza5;
            return src;
        } else if (guessesRemaining === 4) {
            src = pizza4;
            return src;
        } else if (guessesRemaining === 3) {
            src = pizza3;
            return src;
        } else if (guessesRemaining === 2) {
            src = pizza2;
            return src;
        } else {
            src = pizza1;
            return src;
        }
    }

    if (gameOver) {
        visibleState =
            <>
                <GamePage incorrectGuesses={wrongGuesses} guessesLeft={guessesRemaining} displayAnswer={displayAnswer} />
                <EndScenario endState={endState} easyClick={newEasyGame} hardClick={newHardGame} twoPlayerClick={displayInputForm} unsolved={answer} guessesLeft={guessesRemaining} tally={currentPoints} />
                <TotalPoints tally={totalPoints} />
            </>
    } else if (inGame) {
        visibleState = (
            <>
                <GamePage
                    incorrectGuesses={wrongGuesses}
                    guessesLeft={guessesRemaining}
                    displayAnswer={displayAnswer}
                    dubLetResponse={error} />
                <GuessForm onNewGuess={handleGuess} />
                <img src={setSrc()} alt="hangman" />
                <TotalPoints tally={totalPoints} />
            </>
        );
    } else if (wordInputFormVisible) {
        visibleState = (
            <>
                <UserWordInputForm onWordChosen={(chosenWord) => new2PGame(chosenWord.wordChosen)} startGame={new2PGame} />
            </>
        )
    } else {
        visibleState = <PlayButton clickEasy={newEasyGame} clickHard={newHardGame} click2P={displayInputForm} />;
    }

    return <React.Fragment>{visibleState}</React.Fragment>;
};

export default Control;