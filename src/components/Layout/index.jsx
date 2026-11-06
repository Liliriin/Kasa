import Footer from "../Footer";
import Header from "../Header";


export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="container">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
