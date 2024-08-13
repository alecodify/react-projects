import { useState } from 'react'
import * as api from "./data.js";
import List from './List';
import './index.css'

function App() {
  const [people, setPeople] = useState(api.reminder)

  return (
    <main>
      <section className='container'>
         <h3>{people.length} birthdays today</h3>
         <List people={people} />
         <button onClick={() => setPeople([])} >clear all</button>
      </section>
    </main>
  )
}

export default App
