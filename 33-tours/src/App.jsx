import { useEffect, useState } from 'react';

const url = 'https://www.course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const [readMore, setReadMore] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(url);
        const tours = await response.json();
        console.log(tours);
        setLoading(false);
        setTours(tours);
      } catch (error) {
        setLoading(true);
        console.log(error);
      }
    }

    fetchTours();
  }, [])

  if (loading) {
    return (
      <main>
        <div className='loading'>Loading...</div>
      </main>
    )
  }

  return (
    <main>
      <section>
        <div className='title'>
          <h2>our tours</h2>
          <div className='underline'></div>
        </div>

        <div className='tours'>
          {tours.map((tour) => {
            const { id, image, info, name, price } = tour;

            return (
              <article key={id} className='tour'>
                <img src={image} alt={name} />

                <footer>
                  <div className='info'>
                    <h4>{name}</h4>
                    <h4 className='price'>${price}</h4>
                  </div>

                  <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
                  </p>

                  <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
                </footer>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App
