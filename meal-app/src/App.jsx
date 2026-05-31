import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import MealCard from "./MealCard";

export default function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleSelectMeal = async (meal) => {
    // Category filter only returns idMeal + strMeal + strMealThumb, fetch full detail
    if (!meal.strInstructions) {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`,
      ).then((r) => r.json());
      setSelectedMeal(data.meals?.[0] || meal);
    } else {
      setSelectedMeal(meal);
    }
  };

  return (
    <>
      <Navbar />
      {selectedMeal ? (
        <main
          style={{ padding: "1.5rem", maxWidth: "860px", margin: "0 auto" }}
        >
          <button
            onClick={() => setSelectedMeal(null)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "none",
              border: "none",
              color: "#f59e0b",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              marginBottom: "1rem",
              padding: 0,
            }}
          >
            ← Back to Recipes
          </button>
          <MealCard meal={selectedMeal} />
        </main>
      ) : (
        <HomePage onSelectMeal={handleSelectMeal} />
      )}
      <Footer />
    </>
  );
}
