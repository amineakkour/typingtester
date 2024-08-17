import { useState } from "react";
import Character from "./Character";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Game({dificultyLevel}) {
    const [score, setScore] = useState(0);
    const [pause, setPause] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    
    return (
        <div className="bg-gray-100 h-screen p-5 grid grid-rows-12">
            {!gameOver &&  <Character dificultyLevel={dificultyLevel} pause={pause} setGameOver={setGameOver} />}
            <Header score={score} pause={pause} setPause={setPause} gameOver={gameOver} />
            <Body gameOver={gameOver} />
            <Footer />

        </div>
    )
}