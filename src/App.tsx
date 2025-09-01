import jokesData from "./jokesData.js"
import Joke from "./Joke"

const jokeElements = jokesData.map((joke) => {
  const setup = joke.setup;
  const punchline = joke.punchline;
  return < Joke setup = { setup } punchline = { punchline }/>
})

export default function App() {
  return (
    <main>
      <h1>Jokes</h1>
      <h2>Here are some jokes:</h2>
      { jokeElements }
    </main>
  )
}