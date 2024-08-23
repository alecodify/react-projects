import { useState, useEffect } from 'react'
import { getCategoryMovies } from '../api';
import { NOWPLAYING_API_URL } from '../server';
import { Banner, Header, Slides, UpNext } from "../components";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await getCategoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        }
        getData();
    }, [])

    return (
        <div>
            <Header />
            <div className='px-6 lg:px-28 py-5'>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </div>

                <div className='mt-5'>
                    <Slides movies={movies} />
                    <Slides movies={movies} />
                    <Slides movies={movies} />
                    <Slides movies={movies} />
                    <Slides movies={movies} />
                </div>
            </div>
        </div>
    )
}

export default Home