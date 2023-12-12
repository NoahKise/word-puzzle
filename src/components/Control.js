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
    const [displayAnswer, setDisplayAnswer] = useState(["_", "_", "_", "_", "_", "_"]);
    const [endState, setEndState] = useState(false);
    const [doubleLetter, setDoubleLetter] = useState('');

    const newGame = () => {
        setInGame(true);
    };

    const playAgain = () => {
        setInGame(true);
        setWrongGuesses([]);
        setCorrectGuesses([]);
        setGuessesRemaining(6);
        setDisplayAnswer(["_", "_", "_", "_", "_", "_"]);
        setEndState(false);
        setGameOver(false);
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

    const answer = ["P", "U", "Z", "Z", "L", "E"];
    

    const handleGuess = (guess) => {
        setDoubleLetter('');
        if ((guess.guess).length === 1) {
            const upperGuess = (guess.guess).toUpperCase();
            if (correctGuesses.includes(upperGuess) || wrongGuesses.includes(upperGuess)) {
            } else if (answer.includes(upperGuess)){
                const displayAnswerIndex = getIndices(answer, upperGuess); //[2, 3] if 'z'
                for (let i = 0; i < displayAnswerIndex.length; i++) {
                    displayAnswer.splice(displayAnswerIndex[i], 1, upperGuess)
                }
                const newCorrectGuessArray = [...correctGuesses, upperGuess];
                setCorrectGuesses(newCorrectGuessArray);
                if (answer.join('') === displayAnswer.join('')) {
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
            setDoubleLetter("Please enter a single letter");
        }

    }
    let visibleState = null;

    if (gameOver) {
        visibleState = 
        <>
        <GamePage incorrectGuesses={wrongGuesses}  guessesLeft={guessesRemaining} displayAnswer= {displayAnswer}/>
        <EndScenario endState={endState}  click={playAgain}/>
        </>
    } else if (inGame) {
        visibleState = (
            <>
                <GamePage 
                incorrectGuesses={wrongGuesses}  
                guessesLeft={guessesRemaining} 
                displayAnswer= {displayAnswer}
                dubLetResponse={doubleLetter}/>
                <GuessForm onNewGuess={handleGuess} />
            </>
        );
    } else {
        visibleState = <PlayButton click={newGame}/>;
    }

    return <React.Fragment>{visibleState}</React.Fragment>;
};

export default Control;