import Carousel from 'react-multi-carousel';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Banner = ({ movies }) => {
    return (
        <div className="w-full md:w-3/5 relative mx-auto">
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={false}
                slidesToSlide={1}
                containerClass="react-multi-carousel-list"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {movies.map((movie) => (
                    <div key={movie.id} className="relative">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title}
                            className="w-full h-auto"
                        />
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-32 md:w-40 absolute left-2 bottom-0 transform translate-y-1/2"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
