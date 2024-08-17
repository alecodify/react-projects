import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer, Navbar } from './components';
import { FourOhFour, Home, Signin, Signup } from './screens';
import 'react-toastify/dist/ReactToastify.min.css'

function App() {

  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<FourOhFour />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
