import logoHome from "../../assets/LOGO.png";
import logoFooter from "../../assets/footer-logo.png";

export default function Logo({ variant = "home" }) {
  const src = variant === "footer" ? logoFooter : logoHome;
  return <img src={src} alt="Kasa" />;
}
