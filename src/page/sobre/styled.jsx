import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  color: #ffffff;

  @media screen and (max-width: 820px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
  }

  .sobre {
    height: 7rem;
    grid-column: 1 / span 3;
  }
  .interesses {
    height: 11.5rem;
    width: 30rem;
    grid-column: 1;
    
  }
  .objetivos {
    height: 11.5rem;
    width: 30rem;
    grid-row: 2; 
    grid-column: 2;
  }
`;

export const Row = styled.div`
  width: 96vw;
height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .experiencia {
     height: auto;
     width: auto;
    grid-column: 3;
  grid-row: 2 / span 2;
  }

  .jornada {
    height: 11.5rem;
    width: 30rem;
    grid-column: 1;
    grid-row: 3;
  }

  .aprimoramento {
    
    height: 11.5rem;
    width: 30rem;
    grid-column: 2;
  grid-row: 3; 
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
`;
