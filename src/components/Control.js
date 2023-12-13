import React, { useState } from "react";
import GuessForm from "./GuessForm";
import GamePage from "./GamePage";
import EndScenario from "./EndScenario";
import PlayButton from "./PlayButton";
import wordList from "./words";


const Control = () => {
    const [inGame, setInGame] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [wrongGuesses, setWrongGuesses] = useState([]);
    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [guessesRemaining, setGuessesRemaining] = useState(6);
    const [displayAnswer, setDisplayAnswer] = useState(["_", "_", "_", "_", "_", "_"]);
    const [endState, setEndState] = useState(false);
    const [error, setError] = useState('');
    const [answer, setAnswer] = useState([]);

    const newGame = () => {
        setInGame(true);

        setWrongGuesses([]);
        setCorrectGuesses([]);
        setGuessesRemaining(6);
        setDisplayAnswer([]);
        setEndState(false);
        setGameOver(false);

        const randomNumber = Math.floor(Math.random() * wordList.length);
        const randoAnswer = (wordList[randomNumber]).toUpperCase().split('')
        setAnswer(randoAnswer);
        let underscores = [];
        for (let i = 0; i < randoAnswer.length; i++) {
            underscores.push('_');
        }
        console.log(randoAnswer);
        console.log(underscores);
        setDisplayAnswer(underscores);
    };

    const getIndices = (array, letter) => {
        let indices = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === letter) {
                indices.push(i);
            }
        }
        return indices;
    }

    const handleGuess = (guess) => {
        setError('');
        if ((guess.guess).length === 1) {
            const upperGuess = (guess.guess).toUpperCase();
            if (correctGuesses.includes(upperGuess) || wrongGuesses.includes(upperGuess)) {
                setError("You've already guessed that letter")
            } else if (answer.includes(upperGuess)) {
                const displayAnswerIndex = getIndices(answer, upperGuess);
                let displayInProgress = [...displayAnswer]
                for (let i = 0; i < displayAnswerIndex.length; i++) {
                    displayInProgress.splice(displayAnswerIndex[i], 1, upperGuess)
                }
                const newCorrectGuessArray = [...correctGuesses, upperGuess];
                setCorrectGuesses(newCorrectGuessArray);
                setDisplayAnswer(displayInProgress)
                if (answer.join('') === displayInProgress.join('')) {
                    setGameOver(true)
                    setEndState(true)
                }
            } else {
                const newWrongGuessArray = [...wrongGuesses, upperGuess];
                setWrongGuesses(newWrongGuessArray);
                setGuessesRemaining(guessesRemaining - 1)
                if (guessesRemaining === 1) {
                    setGameOver(true)
                }
            }
        } else {
            setError("Please enter a single letter");
        }

    }
    let visibleState = null;

    //let hangmanSRC = `../../public/img/hang${guessesRemaining}.png`;

    if (gameOver) {
        visibleState =
            <>
                <GamePage incorrectGuesses={wrongGuesses} guessesLeft={guessesRemaining} displayAnswer={displayAnswer} />
                <EndScenario endState={endState} click={newGame} unsolved={answer}/>
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
                {/* <img src={hangmanSRC} alt="hangman"></img> */}
            </>
        );
    } else {
        visibleState = <PlayButton click={newGame} />;
    }

    return <React.Fragment>{visibleState}</React.Fragment>;
};

export default Control;