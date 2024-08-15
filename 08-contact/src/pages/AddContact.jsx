import { useState, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Spinner, Row, Col } from "reactstrap";
import { readAndCompressImage } from "browser-image-resizer";
import { useGlobalContext } from '../context/context';
import { getDatabase, ref as dbRef, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { imageConfig } from '../config.js';
import { toast } from "react-toastify"
import { v4 } from 'uuid';

const AddContact = () => {
  const { state, dispatch } = useGlobalContext();

  const { contactToUpdate, contactToUpdateKey } = state;
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [star, setStar] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (contactToUpdate) {
      setName(contactToUpdate.name);
      setEmail(contactToUpdate.email);
      setPhoneNumber(contactToUpdate.phoneNumber);
      setAddress(contactToUpdate.address);
      setStar(contactToUpdate.star);
      setDownloadUrl(contactToUpdate.picture);
      setIsUpdate(true);
    }
  }, [contactToUpdate]);

  const imagePicker = async (e) => {
    try {
      const file = e.target.files[0];
      const storage = getStorage();
      const metadata = { contentType: file.type };

      const resizedImage = await readAndCompressImage(file, imageConfig);
      const storageReference = storageRef(storage, 'images/' + file.name);

      const uploadTask = uploadBytesResumable(storageReference, resizedImage, metadata);

      uploadTask.on('state_changed',
        snapshot => {
          setIsUploading(true);
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          switch (snapshot.state) {
            case 'paused':
              setIsUploading(false);
              console.log('Uploading Paused.');
              break;
            case 'running':
              console.log('Uploading In Progress.');
              break;
            case 'success':
              console.log('Uploading Successful.');
              break;
          }

          if (progress === 100) {
            setIsUploading(false);
            toast("Uploaded!", { type: "success" });
          }
        },
        error => {
          setIsUploading(false);
          toast('Something went wrong', { type: 'error' });
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
            setDownloadUrl(downloadUrl);
          }).catch(error => console.log(error));
        }
      );
    } catch (error) {
      console.log(error);
      toast('Something went wrong', { type: "error" });
    }
  };

  const addContact = async () => {
    try {
      const db = getDatabase();
      const contactRef = dbRef(db, 'contacts/' + v4());
      await set(contactRef, {
        name,
        email,
        phoneNumber,
        address,
        picture: downloadUrl,
        star,
      });
      console.log("Contact added successfully.");
    } catch (error) {
      console.log(error);
      toast('Failed to add', { type: 'error' });
    }
  };

  const updateContact = async () => {
    try {
      const db = getDatabase();
      const contactRef = dbRef(db, 'contacts/' + contactToUpdateKey);
      await set(contactRef, {
        name,
        email,
        phoneNumber,
        address,
        picture: downloadUrl,
        star,
      });
    } catch (error) {
      console.log(error);
      toast('Failed to update', { type: 'error' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    isUpdate ? updateContact() : addContact();

    toast('Success', { type: 'success' });
    dispatch({ type: 'CONTACT_TO_UPDATE', payload: null, key: null });
    navigate("/");
  };

  return (
    <Container fluid className='mt-2'>
      <Row>
        <Col className='offset-md-3 p-2' md='6'>
          <Form onSubmit={handleSubmit}>
            <div className='text-center'>
              {isUploading ? (
                <Spinner type='grow' color='primary' />
              ) : (
                <div>
                  <label htmlFor="imagepicker" className=''><img src={downloadUrl} alt="" className='profile' /></label>
                  <input type="file" name='image' id='imagepicker' accept='image/*' multiple={false} onChange={e => imagePicker(e)} className='hidden' />
                </div>
              )}
            </div>

            <FormGroup><Input type='text' name='name' id='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} /></FormGroup>
            <FormGroup><Input type='email' name='email' id='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} /></FormGroup>
            <FormGroup><Input type='number' name='number' id='phonenumber' placeholder='Phone number' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} /></FormGroup>
            <FormGroup><Input type='textarea' name='area' id='area' placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} /></FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" onChange={() => { setStar(!star) }} checked={star} />{" "}
                <span className="text-right">Mark as Star</span>
              </Label>
            </FormGroup>
            <Button type='submit' color='primary' block className='text-uppercase'>{isUpdate ? "Update" : "Add"}</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddContact;
