import { useState, useEffect } from 'react'
import { Navbar, Breadcrumb, Images, SnackBar } from './components';
import * as api from './api';

function App() {
  const [count, setCount] = useState(10);
  const [text, setText] = useState('cars');
  const [open, toggleSnack] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (count < 3 || count > 200) {
      toggleSnack(true);
      return;
    }

    const getData = async () => {
      await api.getImages(text, count).then(response => {
        setData(response.data.hits);
      })
    }

    getData();
  },[text, count]);

  console.log('text', text)

  return (
    <main>
      <Navbar />
      <Breadcrumb value={text} onChange={(text) => setText(text)} onCountChange={(count) => setCount(count)} />
      <Images data={data} />
      <SnackBar open={open} toggleSnack={toggleSnack} />
    </main>
  )
}

export default App
