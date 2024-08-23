import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { FourOhFour, Home, Movie } from './screens';
import "react-multi-carousel/lib/styles.css";

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Movie />} />
          <Route path='*' element={<FourOhFour />} />
      </Routes>
    </Router>
  )
}

export default App
