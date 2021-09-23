import styled from "styled-components";

export const Button = styled.button`
    padding: 10px;
    margin-left: 0.6rem;
    border: none;
    background: #3C47E9;
    color: #fefefe;
    width: 22%;
    font-size: 1.2em;

    @media (max-width: 375px) {
        margin-left: 0;
        font-size: 0.7rem;
        margin-right: 7rem;
        width: 15%;
    }
`

export const Input = styled.input`
    padding: 10px;
    padding-left: 35px;
    width: 80%;
    border: 1px solid  #fefefe;
    background: #1E213A;
    font-size: 1.2em;
    color: #fefefe;

    @media (max-width: 375px) {
        width: 60%;
        font-size: 0.7rem;
    }
`

export const SearchArea = styled.div`
    display: flex;
    margin-top: 5rem;
    justify-content: center;
    position: relative;
    width: 459px;

`

export const Label = styled.label`
    position: relative;
`