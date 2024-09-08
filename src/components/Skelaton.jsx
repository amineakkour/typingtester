import Starter from './Starter'
import Game from './Game';
import { useEffect, useState } from 'react'

export default function Skelaton() {
    const [started, setStarted] = useState(false);
    const [dificultyLevel, setDificultyLevel] = useState(parseInt(localStorage.getItem("dificulty_level")) || 0);
    const [allowMistakes, setAllowMistakes] = useState(true);
    const [deviceAllowed, setDeviceAllowed] = useState(true);
    const [mistakesAllowed, setMistakesAllowed] = useState(3);

    useEffect(() => {
        if(window.outerWidth < 700) setDeviceAllowed(false);
    }, [])

    if(deviceAllowed) {
        if (started) {
            return <Game mistakesAllowed={mistakesAllowed} setStarted={setStarted} dificultyLevel={dificultyLevel} allowMistakes={allowMistakes} />;
        } else {
            return <Starter mistakesAllowed={mistakesAllowed} setMistakesAllowed={setMistakesAllowed} allowMistakes={allowMistakes} setAllowMistakes={setAllowMistakes} setStarted={setStarted} dificultyLevel={dificultyLevel} setDificultyLevel={setDificultyLevel} />
        }
    }else{
        return <div className='p-5'>
            <h3 className='text-xl text-red-500'>Opps, It looks your device is not allowed</h3>
            <p>You must to log in using a Desktop</p>
            <button className='mt-4 btn-1' onClick={() => setDeviceAllowed(true)}>Continue Anyway</button>
        </div>
    }
}