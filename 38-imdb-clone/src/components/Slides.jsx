import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const Slides = ({ movies }) => {
  return (
    <div className="mt-5">
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {movies.map(movie => (
          <div key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
              className="w-full h-auto"
            />
            <p className="absolute bottom-0 left-0 right-0 text-white text-lg bg-black bg-opacity-50 p-2">
              {movie.original_title}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Slides