import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const View = () => {
  const { state } = useGlobalContext();
  const { contact } = state;

  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md="5" className="offset-md-3">
          <Card className="pt-3 pb-5">
            <CardBody className="text-center ">
              <img height="150" width="150" className="cardImg profile border-danger" src={contact?.picture} />
              <CardTitle className="text-primary mt-3"><h1>{contact?.name}</h1></CardTitle>
              <CardSubtitle><h3><FaPhone className="mr-2" />{contact?.phoneNumber}</h3></CardSubtitle>
              <div className="" style={{display: 'flex', gap: '10px', justifyContent: 'center', alignContent: 'center'}}>
                <Link to={`mailto:{contact?.email}`} className="btn btn-primary btn-block" target="_blank" ><FaEnvelope className="icon mr-2" />{contact?.email}</Link>
                <Link to={`https://maps.google.com/?=${contact?.address}`} className="btn btn-primary btn-block" target="_blank" ><FaMapMarkerAlt className="icon mr-2" />{contact?.address}</Link>
              </div>
              <Link to="/" className="btn btn-secondary btn-block mt-4">Back to Home</Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default View