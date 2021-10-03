import React, { createContext, useContext, useState } from "react";

const ClimateContext = createContext()

export const ClimateProvider = ({children}) => {

    const [weather, setWeather] = useState(false) //estado principal, que recebe o objeto com os dados do clima
    const [current, setCurrent] = useState({}) // estado que seta a localização atual pelo botao de GPS
    const [temp, updateTemp] = useState(false) //estado que altera a unidade de medida da temperatura (Cº -> Fº)

    return (
        <ClimateContext.Provider value={{current, setCurrent, temp, updateTemp, weather, setWeather}}>
            {children}
        </ClimateContext.Provider>
    )
}

export const useClimate = () => useContext(ClimateContext)