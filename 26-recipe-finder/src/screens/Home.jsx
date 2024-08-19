import { Header } from '../components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Header title="Our Recipes" className="bg-image">
      <Link to="/recipes" className='btn btn-primary btn-big'>SEARCH RECIPES</Link>
    </Header>
  )
}

export default Home