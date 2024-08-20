import React, { useContext, useReducer } from 'react'
import { reducer } from './reducer.js';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, [])

    return (
        <AppContext.Provider value={{todos, dispatch}}>{children}</AppContext.Provider>
    )
}

export const useGolbalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext }