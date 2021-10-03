import React, { Fragment } from 'react'
import TodayHighlights from './TodayHighlights'
import * as s from './styles/styled-Highlights'
import { useClimate } from '../Providers/p-climate'

export default function Highlights() {

    const { updateTemp, weather } = useClimate()

    return(
        <Fragment>
            <s.Celsius onClick={() => updateTemp(false)}>
                <s.C>ºC</s.C>
            </s.Celsius> 
            <s.Fahr onClick={() => updateTemp(true)}>
                <s.F>ºF</s.F>
            </s.Fahr>
            <s.Title>Today's Highlights</s.Title>
            <TodayHighlights weather={weather}/>
            <s.Footer>created by Victor Abiscula</s.Footer>
        </Fragment>
    )
}