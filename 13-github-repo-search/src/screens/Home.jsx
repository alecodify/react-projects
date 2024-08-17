import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";
import { useGlobalContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Card, Details } from '../components';
import { toast } from 'react-toastify';
import { useState } from 'react'
import Axios from 'axios'

const Home = () => {
    const { user } = useGlobalContext();
    const [getUser, setGetUser] = useState(null);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${query}`);
            setGetUser(data)
            console.log('details', data);
        } catch (error) {
            toast.error("Unable to Locate the User", error);
        }
    }

    if (!user?.uid) {
        return navigate("/signin");
    }

    return (
        <Container>
            <Row className="mt-3">
                <Col md="12">
                    <InputGroup>
                        <Input type="text" className="input" value={query} placeholder="please provide the username" onChange={(e) => setQuery(e.target.value)} />
                        <Button onClick={fetchDetails} color="primary">Fetch User</Button>
                    </InputGroup>
                    {getUser ? <Card user={getUser} /> : null}
                </Col>
                <Col md="7">{getUser ? <Details api={getUser.repos_url} /> : ""}</Col>
            </Row>
        </Container>
    )
}

export default Home