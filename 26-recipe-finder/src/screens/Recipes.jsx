import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import * as api from '../api';

const Recipes = () => {
  const [searchedQuery, setSearchedQuery] = useState('pizza');
  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getSearchResult = async () => {
      let result = await api.getRecipes(searchedQuery);
      if (result && result.recipes) {
        setRecipes(result.recipes)
      }
    }

    getSearchResult();
  }, [searchedQuery]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchedQuery(value);
  }


  return (
    <div>
      <div className='search-box'>
        <h2 className='search-heading'>Search Recipes with <span className='highlight'>Our Recipe</span></h2>
        <h4>Input Recipes separated by comma</h4>

        <form onSubmit={onSubmit} className='form'>
          <input type="text" placeholder='tomato, potato, pizza' className='search-input' onChange={(e) => setValue(e.target.value)} value={value} />
          <button type='submit' className='search-button'>Search</button>
        </form>
      </div>

      <div className='recipe-list'>
        <h1>RECIPE LIST FOR {searchedQuery}</h1> 
        <div className='recipe-items'>
          {recipes && recipes.map((recipe, index) => (
            <div key={index} className='recipe-item'>
                <img src={recipe.image_url} className='image' alt="" />
                <div className='item-content'>
                    <h2>{recipe.title}</h2>
                    <h4>{recipe.publisher}</h4>
                </div>
                <div className='item-actions'>
                    <Link to={`/recipes/${recipe.recipe_id}`}  className='button blue'>Details</Link>
                    <a href={recipe.source_url} target='_blank' rel='noopener noreferrer' className='button green'>Recipe URL</a>
                </div>
            </div>
          ))}
        </div> 
      </div>      

    </div>
  )
}

export default Recipes