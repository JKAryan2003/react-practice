import { recipes } from './data2.jsx';

export default function One5() {
  return (

    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}