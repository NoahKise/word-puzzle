import React, { useState } from "react";
import GuessForm from "./GuessForm";
import GamePage from "./GamePage";
import EndScenario from "./EndScenario";
import PlayButton from "./PlayButton";

const Control = () => {
    const [inGame, setInGame] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [guesses, setGuesses] = useState([]);
    const [guessesRemaining, setGuessesRemaining] = useState(6);

    const newGame = () => {
        setInGame(true);
    };

    let visibleState = null;

    if (gameOver) {
        visibleState = <EndScenario />;
    } else if (inGame) {
        visibleState = (
            <>
                <GamePage />
                <GuessForm />
            </>
        );
    } else {
        visibleState = <PlayButton click={newGame}/>;
    }

    return <React.Fragment>{visibleState}</React.Fragment>;
};

export default Control;