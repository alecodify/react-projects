import { Link } from 'react-router-dom'

const FourOhFour = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Oops! It's a dead end</h1>
        <p className="text-6xl font-extrabold text-red-600 mb-4">404</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 font-medium" > Back Home </Link>
      </div>
    </section>
  )
}

export default FourOhFour