import Header from "./components/header/header";
import ListaAnimes from "./components/listaAnimes/listaAnimes";
import { BoxInterna } from "./styles";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BoxInterna>
        <ListaAnimes />
      </BoxInterna>
    </div>
  );
}
