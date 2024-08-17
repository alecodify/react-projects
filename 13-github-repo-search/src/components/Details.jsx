import { ListGroup, ListGroupItem } from 'reactstrap'
import { useState, useEffect } from 'react'
import Axios from 'axios'

const Details = ({ api }) => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const fetchRepos = async () => {
            const { data } = await Axios.get(api);
            setRepos(data)
        }

        fetchRepos();
    }, [])

    return (
        <ListGroup className='cards'>
            {repos?.map(repo => (
                <ListGroupItem key={repo.id}>
                    <div className='text-primary'>Repo Name: {repo.name}</div>
                    <div className='text-secondary'>Description: {repo.description}</div>
                    <div className='text-secondary'>Stars: {repo.stargazers_count}</div>
                    <div className='text-secondary'>Watchers: {repo.watchers_count}</div>
                    <div className='text-secondary'>Forks: {repo.forks_count}</div>
                    <div className='text-secondary'>Issues: {repo.open_isses_count}</div>
                    <div className='text-secondary'>Size: {repo.size}</div>
                    <div className='text-secondary'>Language: {repo.language}</div>
                    <div className='text-secondary'>Created at: {repo.created_at}</div>
                    <div className='text-secondary'>Updated at: {repo.updated_at}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Details