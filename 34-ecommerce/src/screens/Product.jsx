import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/Context';
import * as api from '../api';

const Product = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const { productId } = useParams();
    const { addToCart } = useCart()

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const product = await api.fetchProductById(productId);
            setProduct(product);
            setLoading(false);
        }
        fetchProduct().catch(console.error)
    }, [productId])

    if (!loading && !product) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
                    <div className="text-lg font-semibold mb-4 text-gray-800">
                        Product not found.
                    </div>
                    <p className="text-gray-600 mb-4">
                        Please visit{" "} <Link to="/" className="text-blue-500 hover:underline" replace> home </Link>{" "} to see all available products.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 pt-0 mt-8">
            {loading ? (
                <div className="flex justify-center mx-auto w-[100vw] items-center h-screen">
                    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md p-4 md:flex md:space-x-4">
                    <div className="w-full md:w-1/3">
                        <img src={product.image} alt={product.title} className="w-[400px] h-[400px] rounded-lg" />
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col justify-between">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-700">{product.description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-xl font-bold text-gray-800">${product.price}</span>
                            <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition" onClick={() => addToCart(product)}>
                                <img src="/cart.svg" alt="Add to cart" className="w-5 h-5 mr-2" /> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Product