import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";
import "./style.scss";

const linkClass = ({ isActive }) =>
  isActive ? "header__link header__link--active" : "header__link";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo" aria-label="Kasa, retour à l'accueil">
        <Logo />
      </Link>
      <nav className="header__nav" aria-label="Navigation principale">
        <NavLink to="/" className={linkClass}>
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className={linkClass}>
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
