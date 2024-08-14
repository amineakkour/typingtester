import { useState } from "react";

function Head({score}) {
    return <div className="flex justify-between items-center">
        <h2>Score: {score}</h2>
        <button className="btn-1">Replay</button>
    </div>
}

function Body() {
    return <div>Body</div>;
}

function Footer() {
    return <div>Footer</div>;
}

export default function Game() {
    const [score, setScore] = useState(0);
    
    return (
        <div className="bg-gray-100 h-screen p-5">
            <Head score={score} />
            <Body />
            <Footer />
        </div>
    )
}