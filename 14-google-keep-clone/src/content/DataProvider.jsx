import React, { useContext, useState } from 'react';

const DataContext = React.createContext();

const DataProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [deleteNotes, setDeleteNotes] = useState([]);
    const [archiveNotes, setArchiveNotes] = useState([]);

    return (
        <DataContext.Provider value={{ notes, setNotes, deleteNotes, setDeleteNotes, archiveNotes, setArchiveNotes }}>{children}</DataContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(DataContext)
}

export { DataProvider, DataContext }