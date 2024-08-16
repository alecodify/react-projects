import { useState, useEffect } from 'react'
import Character from './Character';
import * as api from '../api';

const Characters = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await api.getData();
            setData(response.characters);
        }
        getData();
    }, [])

    return (
        <div className='cards'>
            {data?.map((value, index) => (
                <Character key={index} value={value} />
            ))}
        </div>
    )
}

export default Characters