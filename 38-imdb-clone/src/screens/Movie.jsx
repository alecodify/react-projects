import { POPULAR_API_URL, type } from '../server';
import { Banner, Header, MovieList } from '../components';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getCategoryMovies } from '../api';

const Movie = () => {
    const [movies, setMovies] = useState([]);

    const { search } = useLocation();

    useEffect(() => {
        const getData = async (API_URL) => {
            let response = await getCategoryMovies(API_URL);
            setMovies(response.results);
        }

        getData(POPULAR_API_URL);
    }, [search]);

    return (
        <div>
            <Header />
            <div className='w-10/12 mx-auto'>
                <Banner movies={movies} />

                <div className="bg-gray-100 text-left p-4">
                    <h6 className="text-lg">IMDb Charts</h6>
                    <h4 className="text-2xl font-bold">{type[search.split('=')[1]]} Movies</h4>
                    <p className="text-xs my-1">As determined by IMDb Users</p>
                    <hr className="my-2 border-gray-300" />
                    <MovieList movies={movies} />
                </div>
            </div>
        </div>
    )
}

export default Movie