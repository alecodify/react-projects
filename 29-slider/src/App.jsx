import { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { people } from './data';

function App() {
  const [data, setData] = useState(people);
  const [index, setIndex] = useState(0);

  const nextHandler = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }

  const prevHandler = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        const result = (oldIndex + 1) % data.length;
        return result; 
      })
    }, 5000)

    return () => {clearInterval(slider)}
  },[index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>reviews</h2>
      </div>

      <div className='container'>
        {data.map((item, idx) => {
          const { id, image, name, title, quote } = item;

          let position = 'nextSlide';
          if (idx === index) {
            position = 'activeSlide'
          }

          if (idx === index - 1 || (index === 0 && idx === data.length - 1)) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='image' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={prevHandler}><FiChevronLeft /></button>
        <button className='next' onClick={nextHandler}><FiChevronRight /></button>
      </div>
    </section>
  )
}

export default App
