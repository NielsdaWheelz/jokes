export default function Joke(props: { setup: string, punchline: string }) {
    return (
        <>
            {props.setup && <p>Setup: {props.setup}</p>}
            {props.punchline && <p>Punchline: {props.punchline}</p>}
            <hr />
        </>
    )
}