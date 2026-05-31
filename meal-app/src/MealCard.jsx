import "./MealCard.css";

export default function MealCard() {
    const meal = {
        strMeal: "Crema Catalana",
        strCategory: "Dessert",
        strArea: "Spanish",
        strMealThumb:
            "https://www.themealdb.com/images/media/meals/x73ll91763247842.jpg",
        strYoutube: "https://www.youtube.com/watch?v=5aw5Ba0PCa0",
        strSource: "https://www.bbcgoodfood.com/recipes/crema-catalana",
    };

    const ingredientsList = [
        { name: "Milk", measure: "400ml" },
        { name: "Double Cream", measure: "150ml" },
        { name: "Cinnamon Stick", measure: "1" },
        { name: "Orange Zest", measure: "1" },
        { name: "Lemon Zest", measure: "1" },
        { name: "Egg Yolks", measure: "7" },
        { name: "Caster Sugar", measure: "100g" },
        { name: "Caster Sugar", measure: "6 tablespoons" },
        { name: "Corn Flour", measure: "45g" },
    ];

    const instructionsParagraphs = [
        "step 1\nPut the milk, cream, cinnamon stick and all the citrus zest in a saucepan set over a medium heat. Cook, stirring often, until the milk is just steaming but not boiling, about 3-5 mins. Remove from the heat, cover with a plate and leave to infuse for at least 30 mins.",
        "step 2\nWhen the cream mixture has infused, whisk the egg yolks, sugar and cornflour together in a separate bowl for 3-5 mins, or until light and pale in colour. Pour the infused milk through a sieve into the egg mixture, whisking continuously. Return the mixture to the saucepan.",
        "step 3\nPut the saucepan over a medium-high heat and whisk for around 10-12 mins. The mixture should start thickening to a custard-like consistency – you can tell it’s ready by dipping a wooden spoon in the mixture, then running a finger through the mixture on the back of the spoon. If the line holds, it's ready. Sieve the mixture into a jug to remove any froth.",
        "step 4\nDivide the custard between six 150ml ramekins or small terracotta dishes, then leave to cool for 1 hr at room temperature until set with a slight wobble. Chill overnight.",
        "step 5\nJust before serving, sprinkle 1 tbsp caster sugar over the top of each ramekin and caramelise using a kitchen blowtorch. Alternatively, slide the ramekins under a hot grill until the sugar turns golden and starts to bubble. Serve straightaway.",
    ];

    return (
        <div className="meal-card">
            {/* Hero */}
            <div className="meal-hero">
                <img
                    className="meal-img"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                />
                <div className="meal-category">
                    {meal.strCategory}({meal.strArea})
                </div>
            </div>

            {/* Content */}
            <div className="meal-content">
                <h2 className="meal-name">{meal.strMeal}</h2>

                {/* Ingredients */}
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

                {/* Links */}
                <div className="ref-links">
                    <a
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ref-link"
                    >
                        ▶ Watch Video Tutorial
                    </a>
                    <a
                        href={meal.strSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ref-link"
                    >
                        🌐 View Original Source
                    </a>
                </div>
            </div>
        </div>
    );
}
