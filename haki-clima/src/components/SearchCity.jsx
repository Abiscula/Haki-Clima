import React, { useState } from 'react'
import {ReactComponent as Close} from './styles/icons/Close.svg';
import * as s from './styles/styled-SearchCity'
import "../index.css"
import axios from 'axios'


export default function SearchCity(props) {

    const [city, setCity] = useState('')
    const requisition = async () => {
        let res = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${city}`)
        console.log(res)
        
        let req = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${res.data[0].woeid}/`)
        props.setWeather(req.data)
        props.setScreen(true)
    }

    return(
        <s.SearchArea>
            <Close className="buttonClose" onClick={() => props.setScreen(true)}/>
            <s.Label>
                <s.Input 
                    type="text"  
                    placeholder="search location"
                    onChange={event => setCity(event.target.value)}
                />
            </s.Label>
            
            <s.Button onClick={requisition}
            >Search</s.Button>
        </s.SearchArea>
    )
}