import { useEffect } from "react"

export default function Headers({score, pause, setPause, gameOver}) {
    
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
            <div className="flex gap-5">
                <button onClick={() => setPause(v => !v)} className="hover:bg-gray-300 w-8 h-8 rounded-full"><i className={`fa-solid ${(pause || gameOver) ? "fa-pause" : "fa-play"}`}></i></button>
                <button className="btn-1" onClick={e =>  window.location.reload()}>
                    <i className="fa-solid fa-reply"></i>
                    &nbsp;Replay
                </button>
            </div>
        </div>
    )
}