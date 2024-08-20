import { Link } from "react-router-dom";
import { useCart } from '../context/Context';

const SHIPPING_CHARGES = 25

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    }

    const round = (value, decimals) => {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals)
    }

    return (
        <div className="cartWrapper py-6 bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4 max-w-4xl">
                {cart.length >= 1 ? (
                    <div className="grid gap-6">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                            {cart.map((item) => (
                                <div className="bg-gray-50 rounded-lg p-4 mb-4 shadow-sm" key={item.product.id}>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                        <div className="itemImage mx-auto">
                                            <img src={item.product.image} alt={item.product.title} className="w-[200px] h-[200px] rounded-md" />
                                        </div>
                                        <div className="itemDesc col-span-2">
                                            <div className="title mb-2">
                                                <Link to={"/product/" + item.product.id} className="text-blue-500 hover:underline">
                                                    {item.product.title}
                                                </Link>
                                            </div>
                                            <span className="text-gray-700 font-bold">${round(item.product.price * item.quantity, 2)}</span>
                                            <div className="itemControl flex items-center mt-2 space-x-2">
                                                <button
                                                    onClick={() => increaseQuantity(item.product.id)}
                                                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                                                > + </button>
                                                <span className="text-gray-800">{item.quantity}</span>
                                                <button
                                                    onClick={() => decreaseQuantity(item.product.id)}
                                                    disabled={item.quantity === 1}
                                                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 disabled:opacity-50"
                                                > - </button>
                                                <button
                                                    className="text-red-500 hover:underline"
                                                    onClick={() => removeFromCart(item.product.id)}
                                                > Remove </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-2xl font-semibold mb-4">Payment Summary</h2>
                            <div className="summary">
                                <div className="flex justify-between py-2 border-b border-gray-200">
                                    <span>Subtotal:</span>
                                    <span className="font-bold">${round(cartTotal(), 2)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-200">
                                    <span>Shipping Fee:</span>
                                    <span className="font-bold">${SHIPPING_CHARGES}</span>
                                </div>
                                <div className="flex justify-between py-2 mt-2">
                                    <span className="text-lg font-semibold">Total:</span>
                                    <span className="text-lg font-semibold">${round(cartTotal() + SHIPPING_CHARGES, 2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <p className="text-red-500 text-xl">&#9432; Cart is empty</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Cart