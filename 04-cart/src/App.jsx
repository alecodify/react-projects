import { useGlobalContext } from './components/Context';
import { CartContainer, Navbar } from './modules';
import "./index.css";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return ( <div className='loading'><h1>Loading...</h1></div> )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
