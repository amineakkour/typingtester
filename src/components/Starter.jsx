import { useState } from "react";

export default function Starter({setStarted}) {
    const [dificultyLevel, setDificultyLevel] = useState(0);
    
    return <div className="bg-gray-100 h-screen flex justify-center items-center">
        <div className="bg-gray-400 w-96 shadow-lg rounded-sm p-2">
            <h4 className="font-semibold">Set dificulty level</h4>
            <div className="flex gap-1">
                {["Easy", "Middle", "Hard"].map((btn, ind) => {
                    return <button key={ind} onClick={e => setDificultyLevel(ind)} className={`bg-gray-50 hover:bg-gray-200 p-0.5 rounded-sm shadow-lg ${ind == dificultyLevel ? "font-semibold ring-2 ring-black" : 1}`}>{btn}</button>
                })}
            </div>
            <button onClick={() => setStarted(true)} className="mt-2 btn-1">Start</button>
        </div>
    </div>;
}