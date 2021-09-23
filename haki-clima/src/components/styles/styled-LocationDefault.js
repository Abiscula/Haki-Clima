import styled from "styled-components";
import c1 from './Cloudy.png'
import c2 from './Cloudy.png'
import c3 from './Cloudy.png'
import c4 from './Cloudy.png'

export const Cloudy1 = styled.div`
    position: absolute;
    width: 248px;
    height: 183px;
    left: -111px;
    top: 266px;
    Opacity: 5%;
    background: url(${c1}) no-repeat;

    @media (max-width: 375px) {
        width: 200px;
        height: 130.05px;
        left: -110px;
        top: 58px;
    }
`

export const Cloudy2 = styled.div`
    position: absolute;
    width: 203px;
    height: 150px;
    left: -89px;
    top: 103px;
    Opacity: 5%;
    background: url(${c2}) no-repeat;
    
    @media (max-width: 375px) {
        left: -111px;
        top: 199.32px;
    }
`

export const Cloudy3 = styled.div`
    position: absolute;
    width: 165px;
    height: 150px;
    left: 292px;
    top: 370px;
    Opacity: 5%;
    background: url(${c3}) no-repeat;

    @media (max-width: 375px) {
        width: 127.45px;
        height: 150.51px;
        left: 225.29px;
        top: 240px;
    }
`

export const Cloudy4 = styled.div`
    position: absolute;
    width: 153px;
    height: 150px;
    left: 306px;
    top: 116px;
    Opacity: 5%;
    background: url(${c4}) no-repeat;

    @media (max-width: 375px) {
        width: 176.01px;
        height: 150.05px;
        left: 246.56px;
        top: 69.27px;
    }
`
export const ClimateDefault = styled.div`
    position: relative;
    width: 459px;
    height: 1023px;
    left: 0px;
    top: 0px;

    @media (max-width: 375px) {
        width: 375px;
        height: 810px;
        left: 0px;
        top: 0px;
    }
   
`

export const SearchPlaces = styled.button`
    margin: 2.5rem;
    background: #6E707A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    width: 161px;
    height: 40px;
    left: 46px;
    top: 42px;

    @media (max-width: 375px) {
        left: -15px;
        top: -15px;
    }
`

export const TextButton = styled.p`
    font-family: 'Raleway', sans-serif;
    color: #E7E7EB;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
`


export const Temp = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 144px;
    line-height: 169,06px;
    position: absolute;
    width: 192px;
    height: 169px;
    left: 124px;
    top: 512px;

    @media (max-width: 375px) {
        font-size: 144px;
        font-weight: 500;
        line-height: 169px;
        width: 192px;
        height: 169px;
        left: 85px;
        top: 348px;
}
`

export const Clime = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: rgba(160, 159, 177, 1);
    position: absolute;
    width: 180px;
    height: 42px;
    left: 140px;
    top: 768px;

    @media (max-width: 375px) {
        font-weight: 600;
        font-size: 36px;
        line-height: 42px;
        width: 129px;
        height: 42px;
        left: 110px;
        top: 540px;
    }
`

export const C = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: 48px;
    font-weight: 100;
    line-height: 56px;
`

export const DateStyle = styled.div`
    font-family: 'Raleway', sans-serif;
    color: #88869D;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    position: absolute;
    height: 21px;
    left: 145px;
    top: 897px;

    @media (max-width: 375px) {
        height: 21px;
        left: 85px;
        top: 630px;
        margin-top: 1.5rem;
    }
`

export const CityStyle = styled.div`
    font-family: 'Raleway', sans-serif;
    color: #88869D;
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    text-align: center;
    position: absolute;
    width: 150px;
    height: 21px;
    left: 156px;
    top: 950px;

    @media (max-width: 375px) {
        height: 21px;
        left: 105px;
        top: 684px;
        margin-top: 1.5rem;
    }
`

export const DefaultIMG = styled.img`
    position: absolute;
    width: 202px;
    height: 234px;
    left: 129px;
    top: 191px;

    @media (max-width: 375px) {
        width: 150px;
        height: 174px;
        left: 100px;
        top: 144px;
    }
`

export const GpsDiv = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    left: 373px;
    top: 42px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 80px;

    @media (max-width: 375px) {
        left: 270px;
        top: 18px;
    }
`