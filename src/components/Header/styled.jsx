import styled, { createGlobalStyle } from "styled-components";
import BackImg2 from "../../assets/img/desktop-wallpaper.jpg";

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
  
  body,
  header{
    background-image: url(${BackImg2});
  }
`;

export const Header = styled.header`
  ${center}
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 47em) {
    display: flex;
    flex-direction: row;

    ul{
      display: flex;
      width: 80vw;
      justify-content: center;
      margin-top: 2.4rem;
    }

  }
`;


export const BoxLogo = styled.div`
  ${center}
  flex-direction: column;
  img {
    margin: .8rem 0 .8rem 1.2rem;
    width: 4.5rem;
    border-radius: 8%;
    /* animation: spin 2s linear infinite; */
  }
    @keyframes spin {from {transform:rotatey(0deg);} to{transform:rotatey(360deg)}
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 3rem;
    font-size: 1.5rem;
    color: #ffffff;
    
    @media screen and (min-width: 47em) {
      display: ${props => props.show ? 'block' : 'none'};
    }
  }
`;

export const BoxContainer = styled.div`
  ${center}
  width: 100%;
  nav a {
    ${center}
    color: #ffffff;
    height: 2.5rem;
    width: 100%;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    transition: all .4s ease-in-out;
    
    @media screen and (min-width: 47em) {
      width: 11rem;
      border-radius: 5px 25px;
      &:hover, &:focus {
        box-shadow: #18d1d1 2px 2px 5px 6px;
        transform: scale(1.1);
      }
    }
  }

  .loginButton{
    ${center}
    color: #ffffff;
    height: 2.5rem;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }
  
  a:hover {
    background-color: #18d1d1;
    color: #000000;
  }

  @media screen and (min-width: 750px) and (max-width: 819px){
    width: 100%;
    margin: 0;
    ul{
      width: 100%;
    }
  }

  @media screen and (max-width: 47em) {
    display: ${props => props.show ? 'block' : 'none'};
  }

  @media screen and (min-width: 47em){
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    .loginButton{
      color: #0a0636c3;
      text-shadow: #ffffff 1px 1px 1px;
      font-size: 21px;
      height: 3rem;
      width: 4.6rem;
      border-style: inset #37d7ec;
      text-shadow: 2px 2px 4px rgba(255, 251, 251, 0.5) 0.5, -2px -2px 3px rgba(24, 233, 215, 0.815);
      -webkit-text-stroke: .1px white;

      &:hover{
        background-color:  #010207;
        text-shadow: #47f830 1px 1px 4px;
        color: #47f830;
      }
    }
  }
`;

export const A = styled.li`
  nav li {
    list-style: none;
    width: 100%;
    
  }
`;