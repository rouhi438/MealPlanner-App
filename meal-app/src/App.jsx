import React from "react";

const MealCard = () => {
  // Захардкоженные данные рецепта
  const meal = {
    strMeal: "Crema Catalana",
    strCategory: "Dessert",
    strArea: "Spanish",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/x73ll91763247842.jpg",
    strYoutube: "https://www.youtube.com/watch?v=5aw5Ba0PCa0",
    strSource: "https://www.bbcgoodfood.com/recipes/crema-catalana",
  };

  // Чистый массив ингредиентов без пустых полей API
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

  // Массив шагов, разбитый для красивых отступов
  const instructionsParagraphs = [
    "step 1\nPut the milk, cream, cinnamon stick and all the citrus zest in a saucepan set over a medium heat. Cook, stirring often, until the milk is just steaming but not boiling, about 3-5 mins. Remove from the heat, cover with a plate and leave to infuse for at least 30 mins.",
    "step 2\nWhen the cream mixture has infused, whisk the egg yolks, sugar and cornflour together in a separate bowl for 3-5 mins, or until light and pale in colour. Pour the infused milk through a sieve into the egg mixture, whisking continuously. Return the mixture to the saucepan.",
    "step 3\nPut the saucepan over a medium-high heat and whisk for around 10-12 mins. The mixture should start thickening to a custard-like consistency – you can tell it’s ready by dipping a wooden spoon in the mixture, then running a finger through the mixture on the back of the spoon. If the line holds, it's ready. Sieve the mixture into a jug to remove any froth.",
    "step 4\nDivide the custard between six 150ml ramekins or small terracotta dishes, then leave to cool for 1 hr at room temperature until set with a slight wobble. Chill overnight.",
    "step 5\nJust before serving, sprinkle 1 tbsp caster sugar over the top of each ramekin and caramelise using a kitchen blowtorch. Alternatively, slide the ramekins under a hot grill until the sugar turns golden and starts to bubble. Serve straightaway.",
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 my-6 font-sans">
      {/* Banner */}
      <div className="relative h-64 w-full bg-gray-200">
        <img
          className="h-full w-full object-cover"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            {meal.strCategory}
          </span>
          <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            {meal.strArea}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {meal.strMeal}
        </h2>

        <hr className="border-gray-100 my-4" />

        {/* Ingredients */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Ingredients
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
            {ingredientsList.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-gray-50 p-2 rounded border border-gray-100"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <strong>{item.measure}</strong> {item.name}
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-100 my-4" />

        {/* Instructions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Instructions
          </h3>
          <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
            {instructionsParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="whitespace-pre-line bg-slate-50/50 p-3 rounded-lg border border-slate-100/60"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs bg-red-50 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors"
          >
            ▶ Watch Video Tutorial
          </a>
          <a
            href={meal.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs bg-slate-50 text-slate-600 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-colors"
          >
            🌐 View Original Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
