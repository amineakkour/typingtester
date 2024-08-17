import { useEffect, useState } from "react";

export default function Character({dificultyLevel, pause, setGameOver}) {  
    const [char, setChar] = useState();
    const [charYPosition, setCharYPosition] = useState(0);
    const [charXPosition, setcharXPosition] = useState(0);
    
    useEffect(() => {
        var chars;

        switch(dificultyLevel) {
            case 0: 
                chars = "azertyuiopqsdfghjklmwxcvbn";
                break;
            case 1: 
                chars = "1234567890azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN";
                break;
            case 2: 
                chars = "1234567890azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN@&é'-_=()[]#<%:!;,.?/\\";
                break;
            default: 
                chars = "azertyuiopqsdfghjklmwxcvbn";
        }

        setChar(chars[Math.floor(Math.random() * chars.length)]);
    }, [])

    useEffect(() => {
        let screenHeight = window.innerHeight;
        
        //moving down animation 
        if((charYPosition + 40 < screenHeight) && !pause) {
            var intervalId = setInterval(() => {
                setCharYPosition(prevPosition => prevPosition + 1);
            }, 10   );
            return () => clearInterval(intervalId); 
        }
        
        if(charYPosition + 40 >= screenHeight) setGameOver(true);

    }, [charYPosition, pause]);
    
    useEffect(() => {
        let screenWidth = window.innerWidth;

        //get random X position
        setcharXPosition(Math.random() * screenWidth)
    }, [])
    
    return (
        <div className={`w-12 h-12 absolute text-5xl font-bold styled-font`} style={{top: `${charYPosition}px`, left: `${charXPosition}px`}}>
            {char}
        </div>
    )
}