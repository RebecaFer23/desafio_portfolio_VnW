import styled, { css, createGlobalStyle } from "styled-components";
// import BackImg from "../../assets/HD-wallpaper.jpg"

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  ${center}
  flex-direction: column-reverse;
  @media screen and (min-width: 48em) {
    justify-content: space-around;
    flex-direction: row;
    height: 80%;
    width: 100%;
  }

  img {
    width: 36vw;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 55%;
  height: 17rem;

  h1 {
    font-size: 38px;
    color: #000;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5),
      -2px -2px 4px rgba(255, 255, 255, 0.5);
    -webkit-text-stroke: 0.5px #27f527;
    /* text-shadow: 3px 2px 3px rgba(255, 255, 255, 0.658); */
    filter: drop-shadow(0 0 0.8em #33d61e);
  }

  p {
    -webkit-text-stroke: 0.5px #ffffff57;
    text-shadow: 3px 2px 5px rgba(255, 255, 255, 0.418);
    color: #d4cbcb;
    font-size: 135%;
  }

  @media screen and (max-width: 620px) {
    ${center}
    justify-content: space-evenly;
    width: 90%;
    h1{
      font-size: 6vw;
    }
    p{
      font-size: 4vw;
    }
  }
`;

export const Cv = styled.a`
  ${center}
  width: 13vw;
  height: 8vh;
  border-radius: 10px;
  text-decoration: none;
  background-color: #000000;
  border: double #33d61e;
  font-weight: bold;
  font-size: 2vw;
  color: #ffffff;

  &:hover {
    color: #000;
    background-color: #4cf336d1;
    border: double #000000;
    filter: drop-shadow(0 0 1em #33d61e);
  }

  @media screen and (max-width: 700px){
    width: 30%;
    height: 15%;
    font-size: 3vw;
  }
`;
