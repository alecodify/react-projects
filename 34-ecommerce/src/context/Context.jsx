import React, { createContext, useContext, useState } from 'react'

const initialState = {
    cart: [],
    cartItemCount: () => 0,
    addToCart: () => null,
    removeFromCart: () => null,
    increaseQuantity: () => null,
    decreaseQuantity: () => null,
}

const CartContext = createContext(initialState);

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(initialState.cart)

    const cartItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const addToCart = (product) => {
        const index = cart.findIndex((item) => item.product.id === product.id)
        if (index !== -1) {
            increaseQuantity(product.id)
        } else {
            setCart([...cart, { product, quantity: 1 }])
        }
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId))
    }

    const increaseQuantity = (productId) => {
        const copy = cart.slice()
        const index = copy.findIndex((item) => item.product.id === productId)
        if (index !== -1) {
            copy[index].quantity += 1
            setCart(copy)
        }
    }

    const decreaseQuantity = (productId) => {
        const copy = cart.slice()
        const index = copy.findIndex((item) => item.product.id === productId)
        if (index !== -1 && copy[index].quantity > 1) {
            copy[index].quantity -= 1
            setCart(copy)
        }
    }

    return (
        <CartContext.Provider value={{ cart, cartItemCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>{children}</CartContext.Provider>
    )
}

export { CartProvider, useCart }