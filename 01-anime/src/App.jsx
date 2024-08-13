import { CharacterGrid, Header, Search } from './components';
import { useEffect, useState } from 'react';
import * as api from "./data";
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await api.charactersNaruto;
      setItems(result.characters)
      setIsLoading(false)
    }

    fetchItems();
  }, [])

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={filteredItems} />
    </div>
  )
}

export default App
