import styled from "styled-components";

export const CardComponent = styled.div`
  margin-top: 1em;
  width: 220px;
  text-align: center;
`;

export const CardImg = styled.div`
  width: 200px !important;
  height: 250px !important;
  background-image: ${(props) => `url(${props.img})`};
  position: relative;
  background-position: center;
  background-size: 200px;
  margin: 0 10px;
  border: 1px solid rgba(134, 115, 165, 0.6);
  transition: transform 0.5s;

  :hover {
    transform: scale(1.1);
  }

  :hover p {
    opacity: 1;
  }

  p {
    opacity: 0;
    color: white;
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 0.5em;
    background-color: rgba(25, 7, 54, 0.75);
    margin-bottom: 0;
    transition: opacity 0.5s;
  }
`;
