export default function Body({gameOver}) {
    return (
        <div>
            {gameOver && <p className="text-red-500 text-3xl font-extrabold absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Game is over</p>}
        </div>
    )
}