import React from 'react';
import Header from './Header';
import '../App.css';
// import GamePage from './GamePage';
// import GuessForm from './GuessForm';
// import EndScenario from './EndScenario';
// import PlayButton from './PlayButton';
import Control from './Control';

function App() {
  return (
    <React.Fragment>
    <Header />
    <hr />
    <Control />
    </React.Fragment>
  );
}

export default App;
