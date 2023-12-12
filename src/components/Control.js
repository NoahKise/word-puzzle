import React, { useState } from "react";
import GuessForm from "./GuessForm";
import GamePage from "./GamePage";
import EndScenario from "./EndScenario";
import PlayButton from "./PlayButton";

const Control = () => {
    const [inGame, setInGame] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [wrongGuesses, setWrongGuesses] = useState([]);
    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [guessesRemaining, setGuessesRemaining] = useState(6);

    const newGame = () => {
        setInGame(true);
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

    const answer = ["P", "U", "Z", "Z", "L", "E"];

    const handleGuess = (guess) => { //guess = { guess: 'a'}
        const upperGuess = (guess.guess).toUpperCase();
        //const newGuessArray = [...wrongGuesses, guess.guess]; // ["a"]
        if (correctGuesses.includes(upperGuess) || wrongGuesses.includes(upperGuess)) {
        } else if (answer.includes(upperGuess)){
            const displayAnswer = getIndices(answer, upperGuess);
            console.log(displayAnswer);
            const newCorrectGuessArray = [...correctGuesses, upperGuess];
            setCorrectGuesses(newCorrectGuessArray);
        } else {
            const newWrongGuessArray = [...wrongGuesses, upperGuess];
            setWrongGuesses(newWrongGuessArray);
            setGuessesRemaining(guessesRemaining - 1)
        }
        //compare guess to provided word array. correct, incorrect, duplicate result. then display
    }

    let visibleState = null;

    if (gameOver) {
        visibleState = <EndScenario />;
    } else if (inGame) {
        visibleState = (
            <>
                <GamePage incorrectGuesses={wrongGuesses}  guessesLeft={guessesRemaining}/>
                <GuessForm onNewGuess={handleGuess} />
            </>
        );
    } else {
        visibleState = <PlayButton click={newGame}/>;
    }

    return <React.Fragment>{visibleState}</React.Fragment>;
};

export default Control;