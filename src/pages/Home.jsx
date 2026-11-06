import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import logements from "../data/logements.json";
import bannerHome from "../assets/banner-home.jpg";

export default function Home() {
  return (
    <>
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />
      <Gallery logements={logements} />
    </>
  );
}
