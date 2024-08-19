import { useState } from 'react'
import { GamePlay, StartGame } from './screens';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <main>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </main>
  )
}

export default App
