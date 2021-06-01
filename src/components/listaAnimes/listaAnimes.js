import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Spinner from "react-bootstrap/Spinner";

import React, { useState, useEffect } from "react";
import "./listaAnimes.css";
import CardAnime from "../cardAnime/cardAnime";

const jikanjs = require("jikanjs");

export default function ListaAnimes() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    jikanjs
      .loadTop("anime")
      .then((response) => {
        console.log(response.top);
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
            console.log(event.code);
            if (event.code === "Enter" || event.code === "NumpadEnter") {
              setLoading(true);
              await jikanjs
                .search("anime", event.target.value)
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
      <div className="boxListaAnimes">
        {loading ? (
          <Spinner animation="grow" style={{margin: "2em"}}/>
        ) : (
          animes.map((anime) => {
            return <CardAnime key={anime.mal_id} anime={anime} />;
          })
        )}
      </div>
    </div>
  );
}
