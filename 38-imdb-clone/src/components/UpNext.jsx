import React from 'react';

const UpNext = ({ movies }) => {
  return (
    <div className="w-full flex flex-col items-start pl-5 pr-2">
      <p className="text-yellow-400 font-semibold text-lg mb-2">Up next</p>
      <div className='flex gap-2 justify-center items-center mx-auto'>
        {movies.slice(0, 3).map((movie) => (
          <div key={movie.id} className="text-white flex flex-col mb-3  items-center">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="poster"
              className="w-40 lg:w-36 h-auto"
            />
            <p className="text-xs md:text-base text-black">{movie.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpNext;
