import React, { useReducer, useContext } from 'react'
import { reducer } from './reducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    error: null,
    loading: true,
}

const AppContext = React.createContext(initialState)


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    async function getTransactions() {
        try {
            const response = await axios.get('/api/')
            dispatch({ type: 'GET_TRANSACTIONS', payload: response.data.data });
        } catch (error) {
            dispatch({ type: 'TRANSACTION_ERROR', payload: error.response.data.error });
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/${id}`);
            dispatch({ type: 'DELETE_TRANSACTION', payload: id });
        } catch (error) {
            dispatch({ type: 'TRANSACTION_ERROR', payload: error.response.data.error });
        }
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                "Content-type": 'application/json',
            }
        };

        try {
            const response = await axios.post(`/api/`, transaction, config);
            dispatch({ type: 'ADD_TRANSACTION', payload: response.data.data })
        } catch (error) {
            dispatch({ type: 'TRANSACTION_ERROR', payload: error.response.data.error });
        }
    }

    return (
        <AppContext.Provider value={{transactions: state.transactions, error: state.error, loading: state.loading, getTransactions, deleteTransaction, addTransaction}}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }