import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="/assets/logo.svg"
            alt="MealMap Logo"
            className="footer-logo"
          />
          <span className="footer-name">MealMap</span>
          <p className="footer-tagline">Plan smarter. Eat better.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
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
              <a href="/favorites">Favorites</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MealMap. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
