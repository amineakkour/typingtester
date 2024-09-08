import { useEffect, useState } from "react";
import Character from "./Character";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Game({mistakesAllowed, setStarted, dificultyLevel, allowMistakes}) {
    const [score, setScore] = useState(0);
    const [pause, setPause] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [char, setChar] = useState("");
    const [mistakesCounter, setMistakesCounter] = useState(0);
    
    function setNewCharacter() {
        var chars = "";

        switch(dificultyLevel) {
            case 0: 
                chars = "azertyuiopqsdfghjkmwxcvbn";
                break;
            case 1: 
                chars = "1234567890azertyuiopqsdfghjkmwxcvbnAZERTYUOPQSDFGHJKLMWXCVBN";
                break;
            case 2: 
                chars = "1234567890azertyuiopqsdfghjkmwxcvbnAZERTYUOPQSDFGHJKLMWXCVBN@&<>{}=()[]#<%:!;.?/\\";
                break;
            default: 
                chars = "azertyuiopqsdfghjklmwxcvbn";
        }
        
        // avoid picking the same charcter
        do {
            var newChar = chars[Math.floor(Math.random() * chars.length)];
        } while (newChar === char);

        setChar(newChar);
    }

    useEffect(() => {
        setNewCharacter();
    }, [])
    
    useEffect(() => {
        function handleKeyDown(e) {     
            if(e.key == char && !pause && !gameOver) {
                setNewCharacter()
                setScore(sc => sc + dificultyLevel + 1);
            }else if(!["Shift", "Space", "Alt", "AltGraph", "Control"].includes(e.key)){
                if(!allowMistakes) setGameOver(true);
                else if(!gameOver) setMistakesCounter(c => c + 1);
            }
        }
        
        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [char, pause, gameOver, mistakesCounter]);

    useEffect(() => {
        if(mistakesCounter >= mistakesAllowed) setGameOver(true);
    }, [mistakesCounter])
    
    return (
        <div className="p-5">
            {!gameOver &&  <Character key={char} char={char} dificultyLevel={dificultyLevel} pause={pause} setGameOver={setGameOver} score={score} />}
            <Header mistakesCounter={mistakesCounter} mistakesAllowed={mistakesAllowed} setStarted={setStarted} score={score} pause={pause} setPause={setPause} gameOver={gameOver} dificultyLevel={dificultyLevel} />
            <Body gameOver={gameOver} setStarted={setStarted} pause={pause} />
            <Footer />

        </div>
    )
}