import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import * as api from '../api';

const Details = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await api.getRecipe(id);
      if (response && response.recipe) {
        setRecipe(response.recipe);
      }
    }

    getData();
  }, [id])

  return (
    <div>
      {Object.keys(recipe).length > 0 ? (
        <div className='details search-box'>
          <div className='details-content'>
            <img src={recipe.image_url} className='image' alt="" />
          </div>

          <div className='details-content'>
            <h1>{recipe.title}</h1>
            <p>Provided By: {recipe.publisher}</p>

            <div className='buttons'>
              <a href={recipe.publisher_url} target='_blank' rel='noopener noreferrer' className='button blue'>Publisher Webpage</a>
              <a href={recipe.source_url} target='_blank' rel='noopener noreferrer' className='button green'>Recipe URL</a>
            </div>

            <h2>Ingredients</h2>
            <ul className='ingredients'>
              {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <Link to="/recipes" className='button yellow'>Back to Recipes</Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Details