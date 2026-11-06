import { Link } from "react-router-dom";
import "./style.scss";


export default function Card({ id, title, cover }) {
  return (
    <li>
      <Link to={`/logement/${id}`} className="card">
        <img className="card__image" src={cover} alt="" loading="lazy" />
        <h2 className="card__title">{title}</h2>
      </Link>
    </li>
  );
}
