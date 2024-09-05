import { useEffect, useState } from "react";
import Character from "./Character";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Game({dificultyLevel, allowMistakes}) {
    const [score, setScore] = useState(0);
    const [pause, setPause] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [char, setChar] = useState("");

    function setNewCharacter() {
        var chars = "";

        switch(dificultyLevel) {
            case 0: 
                chars = "azertyuiopqsdfghjklmwxcvbn";
                break;
            case 1: 
                chars = "1234567890azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN";
                break;
            case 2: 
                chars = "1234567890azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN@&<>{}=()[]#<%:!;.?/\\";
                break;
            default: 
                chars = "azertyuiopqsdfghjklmwxcvbn";
        }

        setChar(chars[Math.floor(Math.random() * chars.length)]);
    }

    useEffect(() => {
        setNewCharacter();
    }, [])
    
    useEffect(() => {

        function handleKeyDown(e) {            
            if(e.key == char && !pause && !gameOver) {
                setNewCharacter()
                setScore(sc => sc + dificultyLevel + 1);
            }else if(!["Shift", "Space", "Alt", "AltGraph"].includes(e.key)){
                if(!allowMistakes) setGameOver(true);
            }
        }
        
        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [char, pause, gameOver]);
    
    return (
        <div className="p-5">
            {!gameOver &&  <Character key={char} char={char} dificultyLevel={dificultyLevel} pause={pause} setGameOver={setGameOver} score={score} />}
            <Header score={score} pause={pause} setPause={setPause} gameOver={gameOver} dificultyLevel={dificultyLevel} />
            <Body gameOver={gameOver} />
            <Footer />

        </div>
    )
}