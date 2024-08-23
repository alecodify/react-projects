import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ResetPassword, SignIn, SignUp } from './screens';

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}

export default App
