import Starter from './Starter'
import Game from './Game';
import { useState } from 'react'

export default function Skelaton() {
    const [started, setStarted] = useState(false);
    const [dificultyLevel, setDificultyLevel] = useState(parseInt(localStorage.getItem("dificulty_level")) || 0);

    if (started) {
        return <Game dificultyLevel={dificultyLevel} />;
    } else {
        return <Starter setStarted={setStarted} dificultyLevel={dificultyLevel} setDificultyLevel={setDificultyLevel} />
    }
}