import styled, { createGlobalStyle } from "styled-components";

export const Main  = styled.main`
    height: auto;
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
    height: 30.7rem;

    @media screen and (max-width: 47em) {
        flex-direction: column;
        align-items: center;
        height: auto;
        margin: 0 2rem;
    }
`

export const FormContainer = styled.div`
    background-color: #000000;
    color: #41df2c;
    width: 30rem;
    margin: 0px  0px 1rem 4rem;
    padding: 1.8rem 2.7rem 1.8rem 1.8rem;
    border-radius: 5px;
    box-shadow: 3px 3px 9px 1px #41df2c;

    .form{
        display: flex;
        flex-direction: column;
    }
    
    @media screen and (max-width: 38em){
        width: 73vw;
        margin: 0px;
    }
    @media screen and (max-width: 28em){
        width: 18rem;
    }
`
export const FormGroup = styled.div`
    margin-bottom: 1.2rem;

    label {
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: .5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .form-checkbox {
        margin-right: .3rem;
    }
`

export const  SubmitButton = styled.button`
    background-color: #065206;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    width: 6rem;
    height: 2.1rem;
    margin-right: 12px;
    cursor: pointer;
        
    &:hover{
        background-color:#41df2c;
        color: #000;
        font-weight: bold;
    }

`
export const  ResetButton = styled.button`
    background-color: #ccc;
    color: #000000;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    width: 6rem;
    height: 2.1rem;
    cursor: pointer;

    &:hover{
        background-color:#41df2c;
    }
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;

    img{
        width: 3.5rem;

        @media screen and (max-width: 68em){
            width: 6vw;
        }
    }

    button{
        margin: 8px;
        background-color: transparent;
        border: none;
        border-radius: 50%;
    }

    @media screen and (max-width: 47em){
        margin: 1.5rem 0;
        flex-direction: row;
    }
`