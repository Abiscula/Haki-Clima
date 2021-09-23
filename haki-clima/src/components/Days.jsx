import React from 'react'
import * as s from './styles/styled-Days'
import dateFormat, { formatedData } from  '../utils/dateFormat'
import tempConvert from '../utils/tempConvert'

export default function Days({weather, temp}) {
    console.log(temp)
    const dias = weather.consolidated_weather
    return(
        <s.DaysArea>
            {dias?.map((atribute, key) => {
                const date = formatedData(atribute.applicable_date)
                const maxT = (temp ? tempConvert(Math.round(atribute.max_temp)) + 'ºF' : Math.round(atribute.max_temp) + 'ºC')
                const minT = (temp ? tempConvert(Math.round(atribute.min_temp)) + 'ºF' : Math.round(atribute.min_temp) + 'ºC')
                if(key >= 1) {
                    return(
                        <s.DayCard key={key}>
                            <s.CardDate>{(key == 1 ? 'Tomorrow' : dateFormat(date))}</s.CardDate>
                            <s.CardIMG src={`https://www.metaweather.com/static/img/weather/${atribute.weather_state_abbr}.svg`}/>
                            <s.CardTemps>
                                <s.CardTMax>{maxT}</s.CardTMax>
                                <s.CardTMin>{minT}</s.CardTMin>
                            </s.CardTemps>
                        </s.DayCard>
                )}
            })}
        </s.DaysArea>
    )
}