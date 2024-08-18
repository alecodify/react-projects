import { useState, useEffect } from 'react'
import * as api from './useFetch';

function App() {
  const { loading, data } = api.useFetch();
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  console.log(data)

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }

  return (
    <main>
      <div className='title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline' /> 
      </div>

      <section className='followers'>
        <div className='follower'>
          {followers?.map((follower) => (
            <article className='card' key={follower.id}>
                <img src={follower.avatar_url} alt={follower.login} />
                <h4>{follower.login}</h4>
                <a href={follower.html_url} className='btn'>view profile</a>
            </article>
          ))}
        </div>

        {!loading && (
          <div className='buttons'>
            <button className='prev-btn' onClick={prevPage}>prev</button>
            {data.map((item, index) => (
              <button key={index} onClick={() => handlePage(index)} className={`page-btn ${index === page ? 'active' : ''}`} >{ index + 1 }</button>
            ))}
            <button className='next-btn' onClick={nextPage}>next</button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
