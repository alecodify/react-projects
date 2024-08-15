import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddContact, Contacts, FourOhFour, View } from "./pages";
import { Header, Footer } from './layout';
import { Container } from "reactstrap";

function App() {
  return (
    <Router>
      <Header />
      <Container className="Center mt-4">
        <Routes>
          <Route path="/contact/add" element={<AddContact />} />
          <Route path="/contact/view" element={<View />} />
          <Route path="/" element={<Contacts />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
