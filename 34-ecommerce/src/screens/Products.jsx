import { useEffect, useState } from 'react'
import { useCart } from '../context/Context';
import { useSearchParams, Link } from 'react-router-dom';
import * as api from '../api';

const Products = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [query] = useSearchParams();
    const { addToCart } = useCart()

    const searchQuery = query.get('q');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const products = searchQuery ? await api.fetchProductsBySearchQuery(searchQuery) : await api.fetchAllProducts();
            console.log(products);
            setProducts(products);
            setLoading(false)
        }
        fetchProducts().catch(console.error)
    }, [searchQuery])

    if (!loading && searchQuery && !products.length) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <div className="text-center text-gray-600">
                    <div className="text-xl font-semibold">No products found matching your query.</div>
                </div>
            </div>
        )
    }

    return (
        <div className="p-4 md:p-8 lg:p-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {loading ? (
                        <div className="flex justify-center mx-auto items-center w-[100vw] h-64">
                            <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
                        </div>
                    ) : (
                        products.map((product) => {
                            const { id, image, title, price } = product;

                            return (
                                <div
                                    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                    key={id}
                                >
                                    <div className="relative">
                                        <img
                                            src={image}
                                            alt={title}
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <Link
                                            to={`/product/${id}`}
                                            className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                                        >
                                            {title}
                                        </Link>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-xl font-bold text-gray-900">${price}</span>
                                            <button
                                                onClick={() => addToCart(product)}
                                                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                                            >
                                                <img className="w-6 h-6" src="/cart.svg" alt="Add to cart" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products