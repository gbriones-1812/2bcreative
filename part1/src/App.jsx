import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick,text}) => (
    <button onClick={onClick}>{text}</button>
)

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})

    const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})

    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}
        </div>
    )
}

export default App