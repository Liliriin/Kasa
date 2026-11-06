import Card from "../Card";
import "./style.scss";


export default function Gallery({ logements }) {
  return (
    <section className="gallery" aria-label="Nos logements">
      <ul className="gallery__list">
        {logements.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </ul>
    </section>
  );
}
