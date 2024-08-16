import { useState, useEffect } from 'react'
import Search from './Search';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSelected, setIsSelected] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch('/api');
        const data = await response.json();
        setData(data);
        setFilteredData(data);
        setLoading(false);
      } catch (error) {
        setError("Unable to Fetch Data")
      }
    }

    fetchData();
  }, [])

  const searchFood = (e) => {
    const value = e.target.value;
    if (value === "") {
      setFilteredData(data);
      return
    }
    
    const filterData = data.filter((food) => typeof food.name === 'string' && food.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filterData);

  }

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setIsSelected("all");
      return;
    }

    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    setIsSelected(type);
  }

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.....</div>;

  return (
    <main>
      <section className='section'>
        <div className='logo'><img src="/logo.svg" alt="logo" /></div>
        <div className='search'><input onChange={searchFood} placeholder='Search Food' /></div>
      </section>

      <section className='categories'>
        {filterBtns.map((value) => (
          <span style={{ backgroundColor: `${isSelected === value.type ? "#f22f2f" : "#ff5500"}`, outline: `1px solid ${isSelected ? 'white' : '#ff4343'}` }} className='item' key={value.name} onClick={() => filterFood(value.type)}>{value.name}</span>
        ))}
      </section>
      <Search data={filteredData} />
    </main>
  )
}

export default App
