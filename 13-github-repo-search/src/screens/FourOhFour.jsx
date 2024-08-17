import { Link } from 'react-router-dom';

const FourOhFour = () => {
    return (
        <section className="error">
            <div className="error-container">
                <h1>oops! it's a dead end</h1>
                <p>404</p>
                <Link to="/" className="btn btn-danger">back home</Link>
            </div>
        </section>
    )
}

export default FourOhFour