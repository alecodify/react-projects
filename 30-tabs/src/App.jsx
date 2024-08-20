import { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://www.course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)


  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(url);
      const newJobs = await response.json();
      console.log(newJobs)
      setJobs(newJobs);
      setLoading(false);
    }

    fetchJobs();
  }, [])

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='section'>
      <div>
        <h2 className='title'>experience</h2>
        <div className='underline'></div>
      </div>

      <div className='container'>
        <div className='buttons'>
          {jobs.map((item, index) => (
            <button className={`job-btn ${index === value && 'active-btn'}`} key={item.id} onClick={() => setValue(index)} >{item.company}</button>
          ))}
        </div>

        <article className='info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => (
            <div key={index} className='job-box'>
              <FaAngleDoubleRight className='icon' />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>

      <button className='btn' type='button'>more info</button>


    </section>
  )
}

export default App
