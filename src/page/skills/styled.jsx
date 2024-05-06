import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
`;

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  flex-direction: row;
  flex-direction: column;

  section {
    padding: 0px 20px;
    flex-direction: column;
    display: flex;
    align-items: center;
    color: #19191a;
    background-color: #c5c7c9d8;
    justify-content: space-evenly;
    width: 75%;
    height: 37.5vh;
    @media screen and (max-width: 48em){
        width: 85%;
    }
    @media screen and (max-width: 480px){
        height: 62vh;
        h3{
            font-size: 5vw;
        }
    }
    @media screen and (max-width: 380px){
        height: 92rem;
        h3{
            font-size: 5vw;
        }
    }
  }

  @media screen and (max-width: 480px){
        height: 80vh;
    }
  @media screen and (max-width: 380px){
        height: 36rem;
    }

  .HTMLwidth {
    padding: 1.4vh;
    @media screen and (max-width: 48em){
        padding: 5px;
    }
  }
`;

export const Kills = styled.div`
  img {
    width: 100%;
    max-width: 9vw;
    height: auto;
    box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.4);
    border-radius: 10%;
    margin: 0px 15px;
    background-color: #b1b3b4;
}
@media screen and (max-width: 48em) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    margin-top: 15px;
    img{
        max-width: 11vw;
    }
}
@media screen and (max-width: 480px){
    img{
        max-width: 14vw;
    }
}

`;
