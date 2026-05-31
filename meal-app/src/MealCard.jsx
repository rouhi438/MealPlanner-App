import "./MealCard.css";

export default function MealCard({ meal }) {
  if (!meal) return null;

  const ingredientsList = [];
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (name && name.trim() !== "") {
      ingredientsList.push({ name, measure });
    }
  }

  const instructions = meal.strInstructions
    ? meal.strInstructions.split("\r\n").filter((i) => i.trim() !== "")
    : [];

  return (
    <div className="meal-card">
      <div className="meal-hero">
        <img className="meal-img" src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="meal-category">
          {meal.strCategory} ({meal.strArea})
        </div>
      </div>

      <div className="meal-content">
        <h2 className="meal-name">{meal.strMeal}</h2>

        <div className="meal-ingredients">
          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            {ingredientsList.map((item, index) => (
              <li key={index} className="ingredients-item">
                <strong>{item.measure}</strong> {item.name}
              </li>
            ))}
          </ul>
        </div>

        <hr className="separator" />

        <div className="meal-instructions">
          <h3>Instructions</h3>
          {instructions.map((text, index) => (
            <p key={index} style={{ marginBottom: "10px", fontSize: "0.9rem" }}>
              {text}
            </p>
          ))}
        </div>

        <div className="ref-links">
          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="ref-link"
            >
              ▶ Watch Video Tutorial
            </a>
          )}
          {meal.strSource && (
            <a
              href={meal.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="ref-link"
            >
              🌐 View Original Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
