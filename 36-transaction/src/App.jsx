import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard, FourOhFour, Support, Transaction } from './screens';

function App() {

  return (
    <Router>
      <div className="select-none section">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/transactions' element={<Transaction />} />
          <Route path='/support' element={<Support />} />
          <Route path='*' element={<FourOhFour />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
