import styled, { createGlobalStyle } from "styled-components";
import BackImg2 from "../../assets/desktop-wallpaper.jpg";

const center = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    background-image: url(${BackImg2});
  }
`;

export const Header = styled.header`
  ${center}
  background-image: url(${BackImg2});
  background-color: #dcdef3;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 48em) {
    display: flex;
    flex-direction: row;

    ul{
      display: flex;
      width: 80vw;
      margin-top: 2.4rem;
    }

  }
`;


export const BoxLogo = styled.div`
  ${center}
  flex-direction: column;

  img {
    margin: .5rem;
    width: 4.5rem;
    border-radius: 8%;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 3rem;
    font-size: 1.5rem;
    color: #ffffff;
    
    @media screen and (min-width: 48em) {
    display: ${props => props.show ? 'block' : 'none'};
    }
  }
`;

export const BoxContainer = styled.div`
  ${center}
  width: 100%;
  
  nav li {
    list-style: none;
    width: 100%;
  }

  nav a {
    ${center}
    color: #ffffff;
    height: 2.5rem;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    transition: all .4s ease-in-out;
    
    @media screen and (min-width: 48em) {
      width: 12rem;
      border-radius: 5px 25px;
      &:hover, &:focus {
        box-shadow: #18d1d1 2px 2px 5px 6px;
        transform: scale(1.1);
      }
    }
  }

  a:hover {
    background-color: #18d1d1;
    color: #000000;
  }

  
  @media screen and (max-width: 48em) {
    display: ${props => props.show ? 'block' : 'none'};
  }

  @media screen and (min-width: 48em){
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;