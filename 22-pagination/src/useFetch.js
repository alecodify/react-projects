import { useEffect } from 'react';
import { useState } from 'react';
import { } from 'react';
const url = "https://api.github.com/users/john-smilga/followers?per_page=100"

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(paginate(data));
            setLoading(false);
        }

        getProducts();
    }, [])

    return { loading, data }
}


const paginate = (followers) => {
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(followers.length / itemsPerPage)

    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage
        return followers.slice(start, start + itemsPerPage)
    })

    return newFollowers
}  