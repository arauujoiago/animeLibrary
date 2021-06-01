import styled from "styled-components";

export const BoxCabecalho = styled.div`
  overflow: hidden;
  background-color: #ffc400;
  padding: 15px 10px;

  a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }

  .logo {
    font-size: 25px;
    font-weight: bold;
  }

  .logo:hover {
    background-color: #ffc400;
    color: black;
  }

  a:hover {
    background-color: #cf9b02;
    color: black;
  }


  .header-right {
    float: right;
  }

  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }

    .header-right {
      float: none;
    }
  }
`;
