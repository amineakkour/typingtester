import { useEffect } from "react"

export default function Body({gameOver, setStarted, pause}) {
    useEffect(() => {
        
        const eventListener = (e) => {
            if(e.ctrlKey) {
                if(e.keyCode == 82) {
                    e.preventDefault();
                    setStarted(false);
                }
            }
        }
        
        document.addEventListener("keydown", eventListener);
    
        return () => {
            document.removeEventListener("keydown", eventListener);
        };
    }, []);

    // gameOver || pause

    return (
        <div>
            {true && 
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    
                    {pause && !gameOver &&
                        <div className="text-8xl text-stone-200">
                            <i className="fa-solid fa-pause"></i>
                        </div>
                    }
                
                    {
                        gameOver && 
                            <div>
                                <p className="text-red-500 text-3xl font-extrabold ">
                                    Game is over
                                </p>
                                <div className="text-xs text-center text-stone-500">
                                    To replay click <span className="text-stone-800 font-semibold">ctrl + R</span> &#160; ;)
                                </div>
                            </div>
                    }
                </div>
                }
        </div>
    )
}