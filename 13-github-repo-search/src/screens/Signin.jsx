import { Container, Form, FormGroup, Label, Col, Row, Input, Button, Card, CardBody, CardHeader, CardFooter } from 'reactstrap'
import { useGlobalContext } from '../context/UserContext';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../config';
import { useState } from 'react'

const Signin = () => {
    const { user, setUser } = useGlobalContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            setUser({
                email: response.user.email,
                uid: response.user.uid,
            })
            toast.success("LoggedIn successfully!");
        } catch (error) {
            console.error("Error signing in:", error);
            toast.error('Invalid Email or Password, Please try again.')
        }

    }

    if (user?.uid) {
        return navigate("/")
    }

    return (
        <Container className='text-center'>
            <Row>
                <Col lg={6} className='offset-lg-3 mt-5'>
                 <Card>
                    <Form onSubmit={handleSubmit}>
                        <CardHeader>SignIn Here</CardHeader>
                        <CardBody>
                            <FormGroup row>
                                <Label for='email' sm={3}>Email</Label>
                                <Col sm={9}><Input type='email' name='email' id='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} /></Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for='password' sm={3}>Password</Label>
                                <Col sm={9}><Input type='password' name='password' id='password' placeholder='Your Password' value={password} onChange={(e) => setPassword(e.target.value)} /></Col>
                            </FormGroup>
                        </CardBody>
                        <CardFooter><Button type='submit' block color='primary'>Sign In</Button></CardFooter>
                    </Form>
                 </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signin