import { useEffect, useState } from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";


export default function Headers({mistakesCounter, mistakesAllowed, setStarted, score, pause, setPause, gameOver, dificultyLevel}) {
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

    function refreshPage() {
        setStarted(false);
    }

    function HeartsBox() {
        const totalHearts = mistakesAllowed;
        const brokenHearts = Math.min(mistakesCounter, mistakesAllowed);
        const fullHearts = totalHearts - brokenHearts;
    
        return (
            <div className="flex gap-1 text-red-500 flex-wrap my-2">
                {/* Render hearts (full or broken) */}
                {Array.from(Array(totalHearts).keys()).map((_, ind) => 
                    ind < fullHearts ? <FaHeart key={ind} /> : <FaHeartBroken className="opacity-70" key={ind} />
                )}
            </div>
        );
    }
    
    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className={`${score ? "flash" : ""}`} key={score}>Score: {score}</h2>
                <div className="flex gap-5 items-center">
                    <p>Level: {dificultyLevelInStr}</p>
                    <p>Timer: {(timer / 100).toFixed(1)}s</p>
                    <button onClick={() => setPause(v => !v)} className="hover:bg-gray-300 w-8 h-8 rounded-full"><i className={`fa-solid ${(pause || gameOver) ? "fa-play" : "fa-pause"}`}></i></button>
                    <button className="btn-1" onClick={refreshPage}>
                        <i className="fa-solid fa-reply"></i>
                        &nbsp;Replay
                    </button>
                </div>
            </div>

            <HeartsBox />
        </div>
    )
}