import { Routes, Route, useNavigate, createSearchParams } from 'react-router-dom'
import { Cart, FourOhFour, Product, Products } from './screens';
import { useCart } from './context/Context';
import { Navbar } from './components';

function App() {
  const navigate = useNavigate();
  const { cartItemCount } = useCart();

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <main>
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <div className='pt-32 lg:pt-20'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<FourOhFour />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
