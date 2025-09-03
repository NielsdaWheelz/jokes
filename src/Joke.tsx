import { useState } from "react"

export default function Joke(props: { setup: string, punchline: string }) {

    const [isShown, setIsShown] = useState(false)

    function togglePunchline() {
        setIsShown(prevIsShown => !prevIsShown)
    }

    return (
        <>
            <h4>Setup: { props.setup }</h4>
            <button onClick = { togglePunchline }>Toggle Punchline</button>
            { props.punchline && isShown && <p>Punchline: { props.punchline }</p> }
            <hr />
        </>
    )
}