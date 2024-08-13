import "./index.css";

const List = ({ people }) => {
  return (
    <div>
        {people.map(({id, name, age , image}) => (
            <article key={id} className="person">
                <img src={image} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>
        ))}
    </div>
  )
}

export default List