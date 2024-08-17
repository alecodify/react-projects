import React, { useContext, useEffect, useReducer } from 'react'
import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_SEARCH, HANDLE_PAGE } from '../utils/actions';
import { reducer } from '../utils/reducer';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const AppContext = React.createContext();

const initialState = {
    isLoading: true,
    hits: [],
    query: 'react',
    page: 0,
    nbPages: 0,
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchStories = async () => {
            dispatch({ type: SET_LOADING });
            try {
                const response = await fetch(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
                const data = await response.json();
                dispatch({ type: SET_STORIES, payload: { hits: data.hits, nbPages: data.nbPages } })
            } catch (error) {
                console.log(error)
            }

        }
        fetchStories();
    }, [state.query, state.page])

    const removeStory = (id) => {
        dispatch({ type: REMOVE_STORY, payload: id });
    }

    const handleSearch = (query) => {
        dispatch({ type: HANDLE_SEARCH, payload: query });
    }

    const handlePage = (value) => {
        dispatch({ type: HANDLE_PAGE, payload: value });
    }


    return (
        <AppContext.Provider value={{ ...state, removeStory, handleSearch, handlePage }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext }