import Logo from "../Logo";
import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo variant="footer" />
      </div>
    </footer>
  );
}
