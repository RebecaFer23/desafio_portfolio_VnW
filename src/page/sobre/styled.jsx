import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  color: #ffffff;

  .sobre {
    width: 100%;
    height: 7rem;
    grid-column: 1 / span 3;
    @media screen and (max-width: 1220px){
      width: 85vw;
    }
    @media screen and (max-width: 580px){
      width: 90vw;
      height: 11.5rem;
    }
  }

  .interesses {
    height: 11.5rem;
    width: 30rem;
    grid-column: 1;
    @media screen and (max-width: 1220px){
      width: 42.5vw;
    }
    @media screen and (max-width: 580px){
      width: 90vw;
    }
  }

  .objetivos {
    height: 11.5rem;
    width: 30rem;
    grid-row: 2; 
    grid-column: 2;
    @media screen and (max-width: 1220px){
      width: 42.5vw;
    }
    @media screen and (max-width: 580px){
      grid-column: 1;
      width: 90vw;
    }
  }

  @media screen and (max-width: 1220px){
    width: 85vw;
  }
  @media screen and (max-width: 580px){
    width: 90vw;
  }
`;

export const Row = styled.div`
  width: 94vw;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width:580px){
      grid-template-columns: 1fr;

    }
  .experiencia {
    height: auto;
    width: auto;
    grid-column: 3;
    grid-row: 2 / span 2;

    @media screen and (max-width: 1220px){
      margin-left: -42.4vw;
      grid-column: 2;
      grid-row: 4;
      height: 11.5rem;
      width: 85vw;
    }
    @media screen and (max-width: 580px){
      grid-column: 1;
      margin-left: 0px;
      width: 90vw;
    }
  }

  .jornada {
    height: 11.5rem;
    width: 30rem;
    grid-column: 1;
    grid-row: 3;
    @media screen and (max-width: 1220px){
      width: 42.5vw;
    }
    @media screen and (max-width: 580px){
      width: 90vw;
    }
  }

  .aprimoramento {
    height: 11.5rem;
    width: 30rem;
    grid-column: 2;
    grid-row: 3;
    @media screen and (max-width: 1220px){
      width: 42.5vw;
    } 
    @media screen and (max-width: 580px){
      grid-column: 1;
      grid-row: 5 / span 3;
      width: 90vw;
    }
  }
`;

export const Card = styled.div`
  border: groove 4px black;
  height: 13rem;
  color: #000000;
  font-weight: bold;
  font-size: 3vh;
  border-radius: 8px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
  cursor: pointer;
  background-color: ${(props) =>
    props.color}; /*cor de fundo com a cor passada na propriedade */
  ${({ virado }) => virado && `transform: rotateY(180deg);`}

  &:hover {
    transform: scale(1.02);
  }
`;

export const Frente = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  text-shadow: #f3f3f3 3px 1px 2px;
  color: #000000;
  text-transform: uppercase;
`;

export const Verso = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 20px;
  text-shadow: #131212 2px 1px 1px;
  color: #ffffff;

  @media screen and (max-width: 950px){
    font-size: 1.8vw;
  }
  @media screen and (max-width: 580px){
    font-size: 3vw;
  }
`;
