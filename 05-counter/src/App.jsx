import { useState } from 'react';
import "./index.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='counter'>
      <header><h1>Counter App</h1></header>
      <h2>Value: {count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => count >= 15 ? "" : setCount(count + 1)}>Increment</button>
      <button onClick={() => count <= 0 ? "" : setCount(count - 1) }>Decrement</button>
    </div>
  )
}

export default App
