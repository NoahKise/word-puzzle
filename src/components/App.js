import React from 'react';
import Header from './Header';
import '../App.css';
import GamePage from './GamePage';
import GuessForm from './GuessForm';
import EndScenario from './EndScenario';
import PlayButton from './PlayButton';

function App() {
  return (
    <React.Fragment>
    <Header />
    <hr />
    <PlayButton />
    <hr />
    <GamePage />
    <hr />
    <GuessForm />
    <hr />
    <EndScenario />
    <hr />
    </React.Fragment>
  );
}

export default App;
