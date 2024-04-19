import styled from "styled-components";

export const Main  = styled.main`
    height: auto;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 84.5vh;
    `

export const FormContainer = styled.div`
    background-color: #6096ee;
    width: 30rem;
    margin: 0;
    padding: 1.8rem 2.7rem 1.8rem 1.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
    .form{
        display: flex;
        flex-direction: column;
    }
`
export const FormGroup = styled.div`
    margin-bottom: 1rem;

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
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin-right: 12px;
    cursor: pointer;
        
    &:hover{
        background-color:#0056b3;
    }

`
export const  ResetButton = styled.button`
    background-color: #ccc;
    color: #000000;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover{
        background-color:#0056b3;
    }
`