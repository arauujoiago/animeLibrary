import { BoxCabecalho } from "./styles";

export default function Header() {
  return (
    <BoxCabecalho>
      <a href="#home" className="logo">
        Anime Library
      </a>
      <div className="header-right">
        <a href="#home">Inicio</a>
        <a href="#contato">Contato</a>
        <a href="#sobre">Sobre</a>
      </div>
    </BoxCabecalho>
  );
}
