import { useEffect, useState } from "react";

export default function Character({char, dificultyLevel, pause, setGameOver, score}) {  
    
    const [charYPosition, setCharYPosition] = useState(0);
    const [charXPosition, setcharXPosition] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isUpper, setIsUpper] = useState(false);

    useEffect(() => {
        if (pause || charYPosition + 73 >= window.innerHeight) return; 
    
        const speed = 20 / (dificultyLevel + 1);
    
        const intervalId = setInterval(() => {
            console.log("Hello")
            setCharYPosition(prevPosition => prevPosition + 4);
        }, speed);
    
        return () => clearInterval(intervalId);
    }, [charYPosition, pause, dificultyLevel]);

    useEffect(() => {
        if(charYPosition + 73 >= window.innerHeight) {
            setGameOver(true);
            
            //set localStorage
            localStorage.setItem("last_score", score);
            if(localStorage.getItem("best_score") < score){
                localStorage.setItem("best_score", score);
            }
        };
    }, [charYPosition])
    
    useEffect(() => {
        //get random X position
        const width = window.innerWidth;

        var x = Math.random() * width;
        if(x < 50){
            x = 50
        }else if(x > width - 50){
            x = width - 50;
        }
        
        setcharXPosition(x)

    }, [])

    useEffect(() => {
        const specialCharacters = "1234567890@&<>{}=()[]#<%:!;.?/\\";

        if(!specialCharacters.includes(char) && char == char.toUpperCase()) setIsUpper(true);
    }, [])
    
    return (
        <div>
            {charXPosition &&
                <div className={`absolute text-5xl font-bold`} style={{top: `${charYPosition}px`, left: `${charXPosition}px`}}>
                    {isUpper ? <span><i className="fa-solid fa-arrow-up text-xl"></i>{char}</span> : char}
                </div>
            }
        </div>
    )
}