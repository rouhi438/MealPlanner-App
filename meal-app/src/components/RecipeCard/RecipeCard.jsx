import "./RecipeCard.css";

export default function RecipeCard({ meal, onSelect }) {
  return (
    <div className="recipe-card" onClick={() => onSelect(meal)}>
      <div className="recipe-card-img-wrap">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="recipe-card-img"
        />
        {meal.strCategory && (
          <span className="recipe-card-badge">{meal.strCategory}</span>
        )}
      </div>
      <div className="recipe-card-body">
        <h3 className="recipe-card-title">{meal.strMeal}</h3>
        {meal.strArea && <p className="recipe-card-area">{meal.strArea}</p>}
        <button className="recipe-card-btn">View Recipe</button>
      </div>
    </div>
  );
}
