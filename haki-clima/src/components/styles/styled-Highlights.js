import styled from "styled-components";

export const Title = styled.h2`
    color: #fefefe;
    margin-left: 8rem;
    font-family: 'Raleway', sans-serif;
    @media (max-width: 375px) {
        width: 220px;
        height: 28px;
        left: -90px;
        top: 780px;
        font-size: 24px;
        line-height: 28px;
        position: absolute;
    }
`

export const Footer = styled.footer`
    font-family: 'Raleway', sans-serif;
    color: #fefefe;
    margin: 0 auto;

    @media (max-width: 375px) {
        position: absolute;
        width: 287px;
        height: 17px;
        left: 65px;
        top: 1850px;
        font-weight: 500;
        font-size: 18px;
        line-height: 17px;
        color: #A09FB1;
    }
`

export const Celsius = styled.button`
    position: absolute;
    width: 40px;
    height: 40px;
    background: #E7E7EB;
    border-radius: 54px;
    left: 1223px;
    top: 42px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const C = styled.p`
    width: 18.1px;
    height: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #110E3C;
`

export const Fahr = styled.button`
    position: absolute;
    width: 40px;
    height: 40px;
    background: #585676;
    border-radius: 54px;
    left: 1275px;
    top: 42px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 375px) {
        display: none;
    }
    
`

export const F = styled.p`
    width: 16.19px;
    height: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #E7E7EB;

    @media (max-width: 375px) {
        display: none;
    }
`