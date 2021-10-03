import React, { createContext, useContext, useState } from "react";

const ScreenContext = createContext(''); // cria o contexto

export const ScreenProvider = ({children}) => { //cria o provedor

    const [screen, setScreen] = useState(true) //altera a tela inicia (temperatura atual / busca)

    return(
        <ScreenContext.Provider value={{screen, setScreen}}>
            {children}
        </ScreenContext.Provider>
    )
}

export const useScreen = () => useContext(ScreenContext); //hook personalizado