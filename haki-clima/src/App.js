import React, {useState, useEffect, Fragment} from 'react'
import SearchCity from './components/SearchCity';
import LocationDefault from './components/LocationDefault';
import Days from './components/Days';
import Highlights from './components/Highlights'
import axios from 'axios' 

function App() {
  const [screen, setScreen] = useState(true)
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)
  const [current, setCurrent] = useState({})
  const [temp, updateTemp] = useState(false)

  let getWeather = async (lat, long) => {
      let res = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
      
      let req = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${res.data[0].woeid}/`)
      setWeather(req.data)
  }

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position) => {
        getWeather(position.coords.latitude, position.coords.longitude)
        setCurrent({lat:position.coords.latitude, long:position.coords.longitude})
        setLocation(true)
    })

  }, []) //código para pedir autorização do usuario e ler as coordenadas

  if(location == false) {
    return (
        <Fragment>
            Habilite sua localização para melhor uso da aplicação
        </Fragment>
    )
} else {
    return (
      <section className="container-area">
        
        <div className="left-area">
          {screen ? <LocationDefault 
                      weather={weather} 
                      setScreen={setScreen}
                      getWeather={getWeather} 
                      current={current}
                      temp={temp}
                    /> 
                  : <SearchCity setScreen={setScreen} setWeather={setWeather} 
          />}
        </div>
  
        <div className="center-area">
          <Days weather={weather} temp={temp}/>
          <Highlights weather={weather} updateTemp={updateTemp}/>
        </div>
        
      </section>
    );
  }
}

export default App;
