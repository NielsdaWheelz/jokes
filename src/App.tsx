import jokesData from "./jokesData.js"
import Joke from "./Joke"

export default function App() {

  const jokeElements = jokesData.map((joke) => {
    const setup = joke.setup;
    const punchline = joke.punchline;
    return < Joke setup = { setup } punchline = { punchline }/>
  })

  return (
    <main>
      <h1>Jokes</h1>
      <h2>Here are some jokes:</h2>
      { jokeElements }
    </main>
  )
}