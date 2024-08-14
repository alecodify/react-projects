import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as api from '../api/api';

const Cocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.drinks
      const item = response.filter((cocktail) => cocktail.idDrink === id)
      const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strCategory, strGlass, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, } = item[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
      ]

      const newCocktail = {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        category: strCategory,
        glass: strGlass,
        instructions: strInstructions,
        ingredients: ingredients,
      }

      await setCocktail(newCocktail);
      setLoading(false);
    }

    fetchData();
  }, [])

  if (loading) {
    return <div>loading</div>
  }

  if (!cocktail) {
    return <h2 className='title cocktail-title'>no cocktail to display</h2>
  }

  return (
    <section className='section drinks'>
      <Link to="/" className='btn btn-primary' >back home</Link>
      <h2 className='title'>{cocktail.name}</h2>
      <div className='drink'>
        <img src={cocktail.image} alt={cocktail.name} />
        <div className='drink-info'>
            <p><span className='drink-data'>name :</span>{cocktail.name}</p>
            <p><span className='drink-data'>category :</span>{cocktail.category}</p>
            <p><span className='drink-data'>info :</span>{cocktail.info}</p>
            <p><span className='drink-data'>glass :</span>{cocktail.glass}</p>
            <p><span className='drink-data'>instructions :</span>{cocktail.instructions}</p>
            <p><span className='drink-data'>ingredients :</span>{
              cocktail.ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null
              })
            }</p>
        </div>
      </div>
    </section>
  )
}

export default Cocktail