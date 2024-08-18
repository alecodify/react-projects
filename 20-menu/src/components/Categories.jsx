
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-box">
        {categories.map((category, index) => (
            <button key={index} className="filter-btn" type="button" onClick={() => filterItems(category)} >{category}</button>
        ))}
    </div>
  )
}

export default Categories