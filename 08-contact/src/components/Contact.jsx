import { Row, Col } from "reactstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getDatabase, ref as dbRef, remove, update } from "firebase/database";

const Contact = ({ contact, contactKey }) => {
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const updateContact = () => {
    dispatch({ type: 'CONTACT_TO_UPDATE', payload: contact, key: contactKey })
    navigate('/contact/add');
  }

  const viewContact = (contact) => {
    dispatch({ type: 'SET_SINGLE_CONTACT', payload: contact })
    navigate('/contact/view');
  }

  const deleteContact = async () => {
    try {
      const db = getDatabase();
      const contactRef = dbRef(db, `/contacts/${contactKey}`);
      await remove(contactRef);
      toast("Deleted Successfully", { type: "success" });
    } catch (error) {
      console.error(error);
      toast("Failed to delete", { type: "error" });
    }
  }

  const updateImage = async () => {
    try {
      const db = getDatabase();
      const contactRef = dbRef(db, `/contacts/${contactKey}`);
      await update(contactRef, { star: !contact.star });
      toast("Contact Updated", { type: "info" });
    } catch (error) {
      console.error(error);
      toast("Failed to update", { type: "error" });
    }
  }

  return (
    <Row>
      <Col md='1' className="d-flex justify-content-center align-items-center">
        <div className="icon" onClick={() => updateImage()}>
          {contact.star ? (<FaStar className="text-primary" />) : (<FaRegStar className="text-info" />)}
        </div>
      </Col>

      <Col md='2' className="d-flex justify-content-center align-items-center">
        <img src={contact.picture} alt="" className="img-circle profile" />
      </Col>

      <Col md='8' onClick={() => viewContact(contact)} className="contact-info">
        <div className="text-primary">{contact.name}</div>
        <div className="text-secondary">{contact.phoneNumber}</div>
        <div className="text-secondary">{contact.email}</div>
        <div className="text-info">{contact.address}</div>
      </Col>

      <Col md='1' className="d-flex justify-content-center align-items-center">
        <MdDelete color="danger" className="text-danger icon" onClick={() => deleteContact()} />
        <MdEdit className="icon text-info ml-2" onClick={() => updateContact()} />
      </Col>
    </Row>
  )
}

export default Contact