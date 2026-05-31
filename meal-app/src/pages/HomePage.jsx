import { useState, useEffect, useCallback } from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import "./HomePage.css";

export default function HomePage({ onSelectMeal }) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load categories on mount
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((r) => r.json())
      .then((data) => setCategories(data.categories || []));
  }, []);

  const fetchByCategory = useCallback(async (category) => {
    setLoading(true);
    const url =
      category === "All"
        ? "https://www.themealdb.com/api/json/v1/1/search.php?s="
        : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`;
    const data = await fetch(url).then((r) => r.json());
    setRecipes(data.meals || []);
    setLoading(false);
  }, []);

  const fetchBySearch = useCallback(async (searchQuery) => {
    setLoading(true);
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchQuery)}`,
    ).then((r) => r.json());
    setRecipes(data.meals || []);
    setLoading(false);
  }, []);

  // Initial load
  useEffect(() => {
    fetchByCategory("All");
  }, [fetchByCategory]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setQuery("");
    fetchByCategory(cat);
  };

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    setActiveCategory("All");
    if (val.trim() === "") {
      fetchByCategory("All");
    } else {
      fetchBySearch(val);
    }
  };

  return (
    <div className="home-page">
      {/* Hero / Search */}
      <section className="home-hero">
        <h1 className="home-title">Find Your Next Favorite Meal</h1>
        <p className="home-subtitle">
          Search thousands of recipes by name or browse by category
        </p>
        <div className="search-bar-wrap">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search recipes... e.g. pasta, chicken, tacos"
            value={query}
            onChange={handleSearch}
          />
          {query && (
            <button
              className="search-clear"
              onClick={() => {
                setQuery("");
                fetchByCategory("All");
              }}
            >
              ✕
            </button>
          )}
        </div>
      </section>

      {/* Category pills */}
      <section className="categories-section">
        <div className="categories-scroll">
          <button
            className={`cat-pill ${activeCategory === "All" ? "active" : ""}`}
            onClick={() => handleCategoryClick("All")}
          >
            🍽️ All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.idCategory}
              className={`cat-pill ${activeCategory === cat.strCategory ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat.strCategory)}
            >
              {cat.strCategoryThumb && (
                <img src={cat.strCategoryThumb} alt="" className="cat-thumb" />
              )}
              {cat.strCategory}
            </button>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="recipes-section">
        {loading ? (
          <div className="loading-state">
            <p>Loading recipes...</p>
          </div>
        ) : recipes.length === 0 ? (
          <div className="empty-state">
            <p>No recipes found for "{query}"</p>
          </div>
        ) : (
          <>
            <p className="results-count">{recipes.length} recipes found</p>
            <div className="recipes-grid">
              {recipes.map((meal) => (
                <RecipeCard
                  key={meal.idMeal}
                  meal={meal}
                  onSelect={onSelectMeal}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
