import React from 'react'
import * as s from './styles/styled-TodayHighlights'
import {ReactComponent as Compass} from './styles/icons/Compass.svg';

export default function TodayHighlights({weather}) {

    const values = {
        humidity: weather&&weather.consolidated_weather[0].humidity,
        windSpeed: Math.round(weather&&weather.consolidated_weather[0].wind_speed),
        windDirection: weather&&weather.consolidated_weather[0].wind_direction_compass,
        visibility: weather&&weather.consolidated_weather[0].visibility.toFixed(2),
        airPressure: weather&&weather.consolidated_weather[0].air_pressure,
        windCompass: weather&&weather.consolidated_weather[0].wind_direction
    }

    return(
        <s.HighlightsArea>

            <s.HighlightsLine>
                <s.CardLarge >
                    <s.Title>Wind status</s.Title>
                    <s.CardValue>{values.windSpeed}<s.Unid>mph</s.Unid></s.CardValue>
                    <s.SectionWind>
                        <s.CompassDiv><Compass compass={values.windCompass+270} /></s.CompassDiv>
                        <s.WindDirection>{values.windDirection}</s.WindDirection>
                    </s.SectionWind>
                </s.CardLarge>

                <s.CardSmall>
                    <s.Title>Visibility</s.Title>
                    <s.CardValue>{values.visibility}<s.Unid>miles</s.Unid></s.CardValue>
                </s.CardSmall>
            </s.HighlightsLine>

            <s.HighlightsLine>
                <s.CardLarge>
                    <s.Title>Humidity</s.Title>
                    <s.CardValue>
                        {values.humidity}<s.Unid>%</s.Unid>
                    </s.CardValue>
                    <s.Bar>
                        <s.BarValues>
                            <s.P>0</s.P> <s.P>50</s.P> <s.P>100</s.P>
                        </s.BarValues>
                        <s.WhiteBar>
                            <s.YellowBar barHumidity={values.humidity*2} />
                        </s.WhiteBar>
                        <s.Percent>%</s.Percent>
                    </s.Bar>
                </s.CardLarge>

                <s.CardSmall>
                    <s.Title>Air Pressure</s.Title>
                    <s.CardValue>{values.airPressure}<s.Unid>mb</s.Unid></s.CardValue>
                </s.CardSmall>
            </s.HighlightsLine>

        </s.HighlightsArea>
    )
}