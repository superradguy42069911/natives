import { NavLink } from "react-router-dom";
import "./SiteNav.css";

export function SiteNav() {
  return (
    <nav className="site-nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "site-nav__link site-nav__link--active" : "site-nav__link")}>
        Plants
      </NavLink>
      <NavLink to="/map" className={({ isActive }) => (isActive ? "site-nav__link site-nav__link--active" : "site-nav__link")}>
        Map
      </NavLink>
      <NavLink to="/permaculture" className={({ isActive }) => (isActive ? "site-nav__link site-nav__link--active" : "site-nav__link")}>
        Permaculture
      </NavLink>
    </nav>
  );
}
