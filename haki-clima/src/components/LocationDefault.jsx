import React from 'react'
import * as s from './styles/styled-LocationDefault'
import dateFormat, { formatedData } from  '../utils/dateFormat'
import {ReactComponent as Location} from './styles/icons/Location.svg';
import {ReactComponent as Gps} from './styles/icons/Gps.svg';
import tempConvert from '../utils/tempConvert';
import { useScreen } from '../Providers/p-screen';
import { useClimate } from '../Providers/p-climate';


export default function LocationDefault({getWeather}) {

    const { setScreen } = useScreen()
    const { current, temp, weather } = useClimate()

    const imgURL = weather&&weather.consolidated_weather[0].weather_state_abbr
    const Climate = Math.round(weather&&weather.consolidated_weather[0].the_temp)
    const ClimateF = (temp ? tempConvert(Climate) : Climate)
    let unit = (temp ? 'ºF' : 'ºC')
    let date = formatedData(weather&&weather.consolidated_weather[0].applicable_date)

    const {lat, long} = current

        return (
            <s.ClimateDefault>
                <s.SearchPlaces onClick={() => setScreen(false)}>
                    <s.TextButton >Search for places</s.TextButton>
                </s.SearchPlaces>

                <s.GpsDiv>
                    <Gps className="gps" onClick={() => getWeather(lat, long)} />
                </s.GpsDiv>

                <s.Cloudy1 /> <s.Cloudy2 /> <s.Cloudy3 /> <s.Cloudy4 />

                <s.DefaultIMG src={`https://www.metaweather.com/static/img/weather/${imgURL}.svg`} />

                <s.Temp>
                    {Math.round(ClimateF)}
                    <s.C>{unit}</s.C>
                </s.Temp>

                <s.Clime>
                    {weather&&weather.consolidated_weather[0].weather_state_name}
                </s.Clime>

                <s.DateStyle>Today • {dateFormat(date)}</s.DateStyle>

                <s.CityStyle>
                    <Location className="location"/>{weather&&weather.title}
                </s.CityStyle>

            </s.ClimateDefault>
        )  
}