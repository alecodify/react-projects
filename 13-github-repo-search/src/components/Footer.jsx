import { Container } from 'reactstrap'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container fluid tag="footer" className='text-center bg-danger text-white fixed-bottom p-3'>Made with <FaHeart /> Copyright @2024</Container>
  )
}

export default Footer