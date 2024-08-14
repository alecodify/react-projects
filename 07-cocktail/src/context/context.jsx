import React, { useContext, useEffect, useState } from 'react'
import * as api from "../api/api";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.drinks
            const newCocktiles = response.map((item) => {
                const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass,
                }
            })
            setCocktails(newCocktiles)
            setLoading(false)
        }

        fetchData();
    },[])

    const filtered = searchTerm ? cocktails.filter(cocktile => cocktile.name.toLowerCase().includes(searchTerm.toLowerCase())) : cocktails;

    return (
        <AppContext.Provider value={{ loading, cocktails: filtered, searchTerm, setSearchTerm }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }