import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <div className="Center text-center mt-4">
      <h1 className="display-4">Oops! It's a dead end</h1>
      <p className="text-danger font-weight-bold" style={{fontSize: "3rem"}}>404</p>
      <Link to="/" className="btn btn-primary mt-3">Back Home</Link>
    </div>
  )
}

export default FourOhFour