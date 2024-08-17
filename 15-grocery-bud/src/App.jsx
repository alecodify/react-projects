import { useState, useEffect } from 'react'
import { Alert, List } from './components';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'Please Enter Value');
    } else if (name && isEditing) {
      setList(list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name };
        }
        return item;
      }))

      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Value Changed');
    } else {
      showAlert(true, 'success', 'Item Added to the List Successfully');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show = false, type = '', message = '') => {
    setAlert({ show, type, message })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item remove');
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const itemEdit = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(itemEdit.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <main>
      <section className='section'>
        <form onSubmit={handleSubmit} className='grocery-form'>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

          <h3>grocery bud</h3>
          <div className='form-control'>
            <input type="text" className='grocery' placeholder='e.g egg' value={name} onChange={(e) => setName(e.target.value)} />
            <button type='submit' className='btn submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
          </div>
        </form>

        {list.length > 0 && (
          <div className='container'>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className='btn clear-btn' onClick={clearList}>clear items</button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
