import { Container, Spinner, ListGroup, ListGroupItem } from "reactstrap";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md"; 
import Contact from "../components/Contact";

const Contacts = () => {
  const { state, dispatch } = useGlobalContext();

  const { contacts, isLoading } = state;
  const navigate = useNavigate();

  const addContact = () => {
    dispatch({type: 'CONTACT_TO_UPDATE', payload: null, key: null})
    navigate("/contact/add")
  }

  if (isLoading) {
    return (
      <div className="Center">
        <Spinner color="primary" />
        <div className="text-primary">Loading...</div>
      </div>
    );
  }

  return (
    <Container className="mt-4">
      {contacts.length === 0 && !isLoading ? (
        <div className="Center text-large text-primary">No Contacts Found</div>
      ): (
        <ListGroup>
            {Object.entries(contacts).map(([key, value]) => (
                <ListGroupItem key={key}>
                  <Contact contact={value} contactKey={key} />
                </ListGroupItem>
              ))}
        </ListGroup>
      )}
      <MdAdd className="fab icon" onClick={addContact} />
    </Container>
  )
}

export default Contacts