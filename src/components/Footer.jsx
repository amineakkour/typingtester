export default function Footer() {
    return (
        <div className="border-t border-t-stone-500 absolute bottom-5 left-0 right-0">
            
            <div className="text-xs text-stone-600 p-2 px-6 flex justify-between">
                <div className="flex gap-6">
                    <p>Characters must not cross the line above!</p>
                    <span>|</span>
                    <p>Click Space to pause the game</p>
                </div>            
                <div>All rights reserved &copy; 2024</div>
            </div>
        </div>
    )
}