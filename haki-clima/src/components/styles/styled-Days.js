import styled from "styled-components";


export const DaysArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 375px) {
        width: 375px;
        left: 0px;
        flex-wrap: wrap;
    }
`

export const DayCard = styled.div`
    width: 120px;
    height: 177px;
    background: #1E213A;
    padding: 5px;
    margin: 80px 10px 10px 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    @media (max-width: 375px) {
        margin: 20px 35px 20px -10px;
    }
`

export const CardDate = styled.p`
    font-family: 'Raleway', sans-serif;
    color: #E7E7EB;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    align-self: center;
    display: flex;
`

export const CardTMax = styled.p`
    font-family: 'Raleway', sans-serif;
    color: #E7E7EB;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
`

export const CardTMin = styled.p`
    font-family: 'Raleway', sans-serif;
    color: #A09FB1;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
`

export const CardTemps = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const CardIMG = styled.img`
    height: 62px;
    width: 56.43946075439453px;
    display: flex;
    align-self: center;
`