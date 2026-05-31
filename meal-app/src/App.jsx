import MealCard from "./MealCard";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomMeal = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php",
      );
      const data = await response.json();
      if (data.meals) setMeal(data.meals[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  const getIngredientsList = (m) => {
    const res = [];
    for (let i = 1; i <= 20; i++) {
      if (m[`strIngredient${i}`]?.trim()) {
        res.push(`${m[`strMeasure${i}`]} ${m[`strIngredient${i}`]}`);
      }
    }
    return res;
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <button
          onClick={fetchRandomMeal}
          className="surprise-btn"
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            backgroundColor: "#ffb703",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          ✨ Surprise Me!
        </button>

        {loading && <p>Searching for a tasty recipe...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {/* Передаем полученный meal в пропсы компоненту */}
        {!loading && meal && <MealCard meal={meal} />}
      </main>
      <MealCard />
      <Footer />
    </>
  );
}
