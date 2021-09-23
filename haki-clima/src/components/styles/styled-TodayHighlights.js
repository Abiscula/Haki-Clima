import styled from 'styled-components'

export const HighlightsArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 375px) {
        width: 375px;
        left: 0px;
        top: 810px;
        position: absolute;
        flex-wrap: wrap;
    }
`

export const HighlightsLine = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

`
export const CardLarge = styled.div`
    width: 328px;
    height: 204px;
    background: #1E213A;
    padding: 5px;
    margin: 0 25px 25px 25px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    display: flex;

    @media (max-width: 375px) {
        width: 80%;
        height: 204px;
        top: 1568px;
        margin: 10px;
    }
    
`

export const CardSmall = styled.div`
    width: 328px;
    height: 159px;
    background: #1E213A;
    padding: 5px;
    margin: 25px 25px 25px 25px;

    @media (max-width: 375px) {
        width: 328px;
        height: 160px;
        top: 2231px;
        margin: 10px;
    }
`

export const Title = styled.h2`
    font-family: 'Raleway', sans-serif;
    color: #E7E7EB;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    height: 19px;
    text-align: center;
    margin-top: 1rem;

`

export const CardValue = styled.p`
    font-family: 'Raleway', sans-serif;
    color: #E7E7EB;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 75px;
    text-align: center;
`
export const Unid = styled.span`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 42.26px;
    text-align: center;
`

export const WindDirection = styled.div`
    width: 38px;
    height: 16px;
    left: 785px;
    top: 611px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #E7E7EB;
`

export const WhiteBar = styled.div`
    width: 200px;
    height: 8px;
    left: 1038px;
    top: 612px;
    background: #E7E7EB;
    border-radius: 80px;
`

export const YellowBar = styled.div`
    width: ${p=>p.barHumidity+'px'};
    height: 8px;
    left: 1038px;
    top: 612px;
    background: #FFEC65;
    border-radius: 80px;
`

export const Bar = styled.div`
    display: flex;
    width: 200px;
    flex-wrap: wrap;
`

export const BarValues = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
`

export const P = styled.p`
    display: flex;
    margin-bottom: 4px;
`

export const Percent = styled.span`
    display: flex;
    margin-top: 4px;
    margin-left: 185px;
`

export const CompassDiv = styled.div`
    padding: 6px;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 80px;
    transform: ${p=>`rotate(${p.children.props.compass+'deg'})`};
    margin-right: 0.8rem;
`

export const SectionWind = styled.section`
    width:  50px;
    display: flex;
    align-items: center;
`