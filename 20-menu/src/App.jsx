import { useState } from 'react'
import { Categories, Menu } from './components';
import { menu } from './data';

function App() {
  const allItems = ['all', ...new Set(menu.map((item) => item.category))]
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allItems);


  const filterItems = (category) =>{
    if (category === 'all') {
      setMenuItems(menu);
      return
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='section'>
         <div className='title'><h2>our menu</h2><div className='underline' /></div>
         <Categories categories={categories} filterItems={filterItems} />
         <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
