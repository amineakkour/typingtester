import { useEffect, useState } from "react";

export default function Character({char, dificultyLevel, pause, setGameOver, score}) {  
    
    const [charYPosition, setCharYPosition] = useState(0);
    const [charXPosition, setcharXPosition] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let screenHeight = window.innerHeight;
        let speed =  5 / (dificultyLevel +1);

        //moving down animation 
        if((charYPosition + 73 < screenHeight) && !pause) {
            var intervalId = setInterval(() => {
                setCharYPosition(prevPosition => prevPosition + 1);
            }, speed);
            return () => clearInterval(intervalId); 
        }
        
        if(charYPosition + 73 >= screenHeight) {
            setGameOver(true);
            
            //set localStorage
            localStorage.setItem("last_score", score);
            if(localStorage.getItem("best_score") < score){
                localStorage.setItem("best_score", score);
            }
        };

    }, [charYPosition, pause, timer]);
    
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
    
    return (
        <div>
            {charXPosition &&
                <div className={`w-12 h-12 absolute text-5xl font-bold`} style={{top: `${charYPosition}px`, left: `${charXPosition}px`}}>
                    {char}
                </div>
            }
        </div>
    )
}