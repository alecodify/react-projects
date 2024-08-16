import { BASE_URL } from '../config';

const Search = ({ data }) => {
  return (
    <section className='card'>
      <main>
        <div className="card-items">
        {data?.map(({ name, image, text, price }) => (
          <div className="card-item" key={name}>
          <div className="food-image">
            <img src={`${BASE_URL}${image}`} alt={name} />
          </div>
          <div className="food-info">
            <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
            </div>
            <span className="item">${price.toFixed(2)}</span>
          </div>
        </div>
        ))}
        </div>
      </main>
    </section>
  )
}

export default Search