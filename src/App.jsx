import { useState } from 'react'
import "./styles/index.css"
import Starter from './components/Starter'
import Game from './components/Game';

function App() {
  const [started, setStarted] = useState(0);
  const [dificultyLevel, setDificultyLevel] = useState(0);

  if(started) {
    return <Game dificultyLevel={dificultyLevel} />;
  }else{
    return <Starter setStarted={setStarted} dificultyLevel={dificultyLevel} setDificultyLevel={setDificultyLevel} />
  }
}

export default App
