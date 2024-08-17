import { useEffect, useState } from "react"

export default function Headers({score, pause, setPause, gameOver, dificultyLevel}) {
    const [timer, setTimer] = useState(0);
    const [dificultyLevelInStr, setDificultyLevelInStr] = useState("");

    useEffect(() => {
        if(dificultyLevel == 0) setDificultyLevelInStr("Easy");
        else if (dificultyLevel == 1) setDificultyLevelInStr("Medium");
        else setDificultyLevelInStr("Hard");
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if(!pause && !gameOver) {
                setTimer(t => t +1)
            }else if(gameOver) {
                clearTimeout(interval);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [pause, gameOver])
    
    
    useEffect(() => {
        const handlePauseWithSpace = e => {
            if(e.key == " ") setPause(v => !v)
        }

        window.addEventListener("keydown", handlePauseWithSpace);
        return () => removeEventListener("keydown", handlePauseWithSpace);
    }, [])
    
    return (
        <div className="flex justify-between items-center">
            <h2>Score: {score}</h2>
            <div className="flex gap-5 items-center">
                <p>Level: {dificultyLevelInStr}</p>
                <p>Timer: {(timer / 100).toFixed(1)}s</p>
                <button onClick={() => setPause(v => !v)} className="hover:bg-gray-300 w-8 h-8 rounded-full"><i className={`fa-solid ${(pause || gameOver) ? "fa-play" : "fa-pause"}`}></i></button>
                <button className="btn-1" onClick={e =>  window.location.reload()}>
                    <i className="fa-solid fa-reply"></i>
                    &nbsp;Replay
                </button>
            </div>
        </div>
    )
}