import { FaStar } from 'react-icons/fa';

const MovieList = ({ movies }) => {
  return (
    <div className="space-y-4">
      {movies.map(movie => (
        <div key={movie.id} className="flex items-center space-x-4">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_title}
            className="w-12 h-auto"
          />
          <div className="flex flex-col space-y-1">
            <p className="text-black text-lg">{movie.original_title}</p>
            <div className="flex items-center space-x-2 text-yellow-500">
              <FaStar />
              <p className="text-white">{movie.vote_average}</p>
            </div>
            <p className="text-gray-400">{movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList