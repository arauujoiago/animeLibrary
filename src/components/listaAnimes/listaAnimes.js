import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Spinner from "react-bootstrap/Spinner";

import React, { useState, useEffect } from "react";
import CardAnime from "../cardAnime/cardAnime";
import { BoxListaAnimes } from "./styles";

const jikanjs = require("jikanjs");

export default function ListaAnimes() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    jikanjs
      .loadTop("anime", 1, "tv")
      .then((response) => {
        setAnimes(response.top);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <InputGroup className="mb-2 mr-sm-2">
        <InputGroup.Prepend>
          <InputGroup.Text>Buscar</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onKeyPress={async (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
              setLoading(true);
              await jikanjs
                .search("anime", event.target.value, 1, { limit: 20 })
                .then((response) => {
                  setLoading(false);
                  setAnimes(response.results);
                })
                .catch((err) => {
                  console.error(err);
                });
            }
          }}
          id="formNomeBusca"
        />
      </InputGroup>
      <a href="/">
        <BoxListaAnimes>
          {loading ? (
            <Spinner animation="grow" style={{ margin: "2em" }} />
          ) : (
            animes.map((anime) => {
              return <CardAnime key={anime.mal_id} anime={anime} />;
            })
          )}
        </BoxListaAnimes>
      </a>
    </div>
  );
}
