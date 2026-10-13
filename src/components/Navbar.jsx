import { NavLink } from "react-router-dom";
import Button from "./Button.jsx";

function Navbar({ darkMode, onToggleDark, favoritesCount }) {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Users
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          About
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <span>Favorites: {favoritesCount}</span>
        <Button
          label={darkMode ? "Light mode" : "Dark mode"}
          onClick={onToggleDark}
        />
      </div>
    </nav>
  );
}

export default Navbar;