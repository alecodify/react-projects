import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Archive, Delete, Home } from './screens'
import { Drawer } from './modules';

function App() {
  return (
    <Router>
      <main>
        <Drawer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/delete' element={<Delete />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
