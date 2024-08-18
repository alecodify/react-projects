import { useGlobalContext } from './context/Context';
import { Modal, Form } from './components';

function App() {
  const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer } = useGlobalContext();

  if (waiting) {
    return <Form />
  }

  if (loading) {
    return <div className='loading' />
  }

  const { question, incorrect_answers, correct_answer } = questions[index]

  let answers = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }

  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'> correct answers : {correct}/{index}</p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => (
              <button key={index} className='answer-btn' onClick={() => checkAnswer(correct_answer === answer)} dangerouslySetInnerHTML={{ __html: answer }} />
            ))}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}> next question </button>
      </section>
    </main>
  )
}

export default App
