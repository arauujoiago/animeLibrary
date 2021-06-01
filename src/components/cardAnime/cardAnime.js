import { CardComponent, CardImg } from "./styles";
export default function CardAnime({ anime }) {
  return (
    <CardComponent>
      <CardImg img={anime.image_url}>
        <p>{anime.title}</p>
      </CardImg>
    </CardComponent>
  );
}
