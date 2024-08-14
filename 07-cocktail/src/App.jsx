import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Cocktail, Error, Home } from "./pages";
import { Navbar } from "./components";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/cocktail/:id"  element={<Cocktail />} />
        <Route path="*"  element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
