import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
`;

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-direction: column;
  border-radius: 6px;
  background-color: #c5c7c9d8;
  margin: 0px 4rem;
  @media screen and (max-width: 480px) {
    margin: 0px 1rem;
    width: 90%;
  }
  section {
    padding: 0px 20px;
    flex-direction: column;
    display: flex;
    align-items: center;
    color: #19191a;
    justify-content: space-evenly;
    height: 37.5vh;
    @media screen and (max-width: 480px) {
      height: 50vh;

      h3 {
        font-size: 5vw;
      }
    }
    @media screen and (max-width: 380px) {
    border: 1px solid white;
    
      height: 45vh;
      img{
    border: 1px solid white;

        /* width: 20vw; */
      }
      h3 {
        font-size: 6vw;
      }
    }
  }

  .HTMLwidth {
    padding: 1.4vh;
    @media screen and (max-width: 48em) {
      padding: 5px;
    }
  }
`;

export const Kills = styled.div`
  img {
    width: 100%;
    max-width: 8vw;
    height: auto;
    box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.4);
    border-radius: 10%;
    margin: 0px 15px;
    background-color: #b1b3b4;
  }

  @media screen and (max-width: 1041px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    margin: 15px;
  }

  @media screen and (max-width: 48em) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    margin-top: 15px;
    width: 65vw;
    img {
      max-width: 12vw;
      
    }
  }
  @media screen and (max-width: 480px) {
    width: 60vw;
    img {
      max-width: 14vw;
    }
  }
`;
