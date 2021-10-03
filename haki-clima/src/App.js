import React, {useState, useEffect, Fragment} from 'react'
import SearchCity from './components/SearchCity';
import LocationDefault from './components/LocationDefault';
import Days from './components/Days';
import Highlights from './components/Highlights'
import axios from 'axios' 
import { useScreen } from './Providers/p-screen';
import { useClimate } from './Providers/p-climate';

function App() {
  const { screen } = useScreen()
  const { setCurrent, setWeather } = useClimate()
  const [location, setLocation] = useState(false) //estado que valida se o usuario habilitou a localização

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
          {screen 
                  ? <LocationDefault getWeather={getWeather}/> 
                  : <SearchCity/> 
          }
        </div>
  
        <div className="center-area">
          <Days/>
          <Highlights/>
        </div>
        
      </section>
    );
  }
}

export default App;
