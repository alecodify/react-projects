import React, { useContext, useEffect, useReducer } from 'react';
import { getFirebaseConfig } from '../config.js'; 
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { reducer } from './reducer.js';

const app = initializeApp(getFirebaseConfig());
const database = getDatabase(app);

const AppContext = React.createContext();

const initialState = {
    contacts: [],
    contact: {},
    contactToUpdate: null,
    contactToUpdateKey: null,
    isLoading: false
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const getContacts = async () => {
            dispatch({ type: 'SET_LOADING', payload: true });

            const contactsRef = ref(database, '/contacts');
            onValue(contactsRef, snapshot => {
                dispatch({
                    type: 'SET_CONTACT',
                    payload: snapshot.val(),
                });
                dispatch({ type: 'SET_LOADING', payload: false });
            });
        };

        getContacts();
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };