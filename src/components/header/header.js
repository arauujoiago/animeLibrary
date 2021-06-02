import { BoxCabecalho } from "./styles";

export default function Header() {
  return (
    <BoxCabecalho>
      <a href="home" className="logo">
        Anime Library
      </a>
      <div className="header-right">
        <a href="myanimes">Meus Animes</a>
        <a href="profile">Perfil</a>
      </div>
    </BoxCabecalho>
  );
}
