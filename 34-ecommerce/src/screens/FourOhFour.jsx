import { Link } from 'react-router-dom';

const FourOhFour = () => {
    return (
        <div className="mx-auto h-[80vh] flex justify-center items-center  p-4">
            <div className="bg-white rounded-lg shadow-md p-6 w-[400px] mx-auto text-center">
                <div className="text-xl font-semibold mb-4 text-gray-800">
                    Page not found.
                </div>
                <p className="text-gray-600">
                    Go to{" "} <Link to="/" className="text-blue-500 hover:underline" replace>homepage</Link>
                </p>
            </div>
        </div>

    )
}

export default FourOhFour