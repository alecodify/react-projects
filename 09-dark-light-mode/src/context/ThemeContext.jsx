import React, { useContext, useState } from 'react'

const AppContext = React.createContext(['light', () => { }]);

const themeColor = {
    light: {
        textColor: "#000",
        backgroundColor: "#FFF",
        border: "2px solid #000"
    },
    dark: {
        textColor: "#FFF",
        backgroundColor: "#333",
        border: "2px dashed #000"
    }
}

const AppProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    return (
        <AppContext.Provider value={{themeMode, setThemeMode, themeColor }}>
            <div style={{color: themeColor[themeMode].textColor, backgroundColor: themeColor[themeMode].backgroundColor}}>
                {children}
            </div>
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppContext, AppProvider }