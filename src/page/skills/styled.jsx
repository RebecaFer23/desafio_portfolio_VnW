import styled from "styled-components";
    export const Main  = styled.main`
    height: 100vh;
    `

export const SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    flex-direction: column;
    
    section{
        padding: 0px 20px;
        flex-direction: column;
        display:flex;
        align-items: center;
        color: #19191a;
        background-color: #c5c7c9d8;
        justify-content: space-evenly;
        width: 75%;
        height: 37.5vh;
    }

    img{
        width: 100%;
        max-width: 100px;
        height: auto;
        box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.4);
        border-radius: 10%;
        margin: 0px 15px;
        background-color: #b1b3b4;
    }

    .HTMLwidth{
        padding: 13px;
    }
`