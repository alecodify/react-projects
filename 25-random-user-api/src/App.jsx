import { Container, Row, Col, Card, CardBody, CardTitle, CardText, } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'


function App() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://randomuser.me/api/')
      console.log(data);
      const details = data.results[0];
      setDetails(details);
    }

    fetchData();
  }, [])

  return (
    <Container fluid className='p-4 bg-primary app'>
      <Row>
        <Col className='offset-md-4 mt-4' md={4}>
          <Card>
            <CardBody className='text-center'>
              <img src={details?.picture?.large} height="150" width="150" className='rounded-circle img-thumbnail border-danger' alt="" />
              <CardTitle className='text-primary'><h1>{details.name?.title}. {details.name?.first} {details.name?.last}</h1></CardTitle>
              <CardText className='m-3'><span><FaMapMarkedAlt /> {details.location?.city} </span></CardText>
              <CardText className='m-3'><span><FaPhone /> {details.phone} </span></CardText>
              <CardText className='m-3'><span><FaEnvelope /> {details.email} </span></CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default App
