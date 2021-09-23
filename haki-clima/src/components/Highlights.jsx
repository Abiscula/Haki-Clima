import React, { Fragment } from 'react'
import TodayHighlights from './TodayHighlights'
import * as s from './styles/styled-Highlights'

export default function Highlights({weather, updateTemp}) {
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