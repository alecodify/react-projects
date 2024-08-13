import { useState } from 'react';
import Question from './Question';
import * as api from "./data";
import "./index.css"

function App() {
  const [questions, setQuestions] = useState(api.questions);

  return (
    <main>
      <div className='container'>
        <div className='pink-box' />
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </section>
        <div className='l-shape horizontal' />
        <div className='l-shape vertical' />
      </div>
    </main>
  )
}

export default App
