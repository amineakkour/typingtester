export default function Body({gameOver}) {
    return (
        <div>
            {gameOver && 
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <p className="text-red-500 text-3xl font-extrabold ">
                        Game is over
                    </p>
                    <div className="text-xs text-center text-stone-500">
                        To replay click <span className="text-stone-800 font-semibold">ctrl + R</span> &#160; ;)
                    </div>
                </div>
                }
        </div>
    )
}