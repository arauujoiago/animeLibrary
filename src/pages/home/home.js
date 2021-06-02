import Layout from "../../components/layout/layout";
import ListaAnimes from "../../components/listaAnimes/listaAnimes";
import { BoxInterna } from "./styles";

export default function Home() {
  return (
    <Layout>
      <BoxInterna>
        <ListaAnimes />
      </BoxInterna>
    </Layout>
  );
}
