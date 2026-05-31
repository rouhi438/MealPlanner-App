import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src="/assets/logo.svg" alt="Meal App Logo" />
      <p1 className="app-name">MealMap</p1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/recipes">Recipes</a>
        </li>
        <li>
          <a href="/meal-planner">Meal Planner</a>
        </li>
        <li>
          <a href="/favorites">Favorites❤</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
