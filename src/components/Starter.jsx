import { useEffect, useState } from "react";

export default function Starter({setStarted, dificultyLevel, setDificultyLevel}) {

    useEffect(() => {
        //set dificulty level on localstorage
        localStorage.setItem("dificulty_level", dificultyLevel);
    }, [dificultyLevel])
    
    return <div>
        
        <div className="flex p-5 justify-end items-center gap-5">
            <p>Your last core: {localStorage.getItem("last_score") || 0}</p>
            <p>Your best score: {localStorage.getItem("best_score") || 0}</p>
        </div>

        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <div className="bg-gray-400 w-96 shadow-lg rounded-sm p-2">
                <h4 className="font-semibold">Set dificulty level</h4>
                <div className="flex gap-1">
                    {["Easy", "Medium", "Hard"].map((btn, ind) => {
                        return <button key={ind} onClick={e => setDificultyLevel(ind)} className={`bg-gray-50 hover:bg-gray-200 p-0.5 rounded-sm shadow-lg ${ind == dificultyLevel ? "font-semibold ring-2 ring-black" : 1}`}>{btn}</button>
                    })}
                </div>
                <button onClick={() => setStarted(true)} className="mt-2 btn-1">Start</button>
            </div>
        </div>
    </div>;
}