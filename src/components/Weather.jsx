import { useEffect, useState } from "react"
import Loading from "./Loading"

const Card = ({ item, value }) => {
  return (
    <div className="flex mt-2">
      <p className="bg-green-300 p-2 w-fit rounded-lg flex-grow text-center">{item}</p>
      <p className="bg-green-200 p-2 ml-2 rounded-lg flex-grow text-center" id="precipitation">{value}</p>
    </div>
  )
}

const Weather = () => {
  const [location, setLocation] = useState("Accra, Ghana")
  const [weatherData, setWeatherData] = useState(null)

  const getWeatherInfo = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=68fcafa37caddb2e4976e6b33e18b55b`;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newData = {
          weather: data.weather[0].main,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          wind: data.wind.speed,
        };
        setWeatherData(newData)
      })
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
      })
  };

  const handleSearch = () => {
    getWeatherInfo(location)
  };

  return (
    <>
    <div className="w-[400px] bg-green-200 p-3 mx-auto mt-2 rounded-xl">
        <input 
          type="text" 
          placeholder={location} 
          className="p-1 px-2 bg-green-100 rounded-lg w-[295px] outline-none" 
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getWeatherInfo(location);
            }
          }}
        />

        <button 
          onClick={ 
            () => { 
              getWeatherInfo(location); 
              setLocation(location) 
              } 
            } 
          className="bg-green-400 p-1 px-2 rounded-lg ml-2">
            Search
        </button>
    </div>

    <div className='flex flex-col justify-center p-2 bg-green-300 mt-2 w-[400px] mx-auto rounded-lg h-[335px]'>
        <Card item="Weather Condition" value={location}/>
        <div className="bg-sky-50 h-full mt-2 p-2 rounded-lg">
        {weatherData && (
          <>
            <Card 
              item="Weather Condition"
              value={weatherData.weather}
            />
            <Card
              item="Pressure"
              value={`${weatherData.temperature} hPa`}
            />
            <Card 
              item="Wind Speed"
              value={`${weatherData.wind} km/h`}
            />
            <Card 
              item="Humidity"
              value={`${weatherData.humidity} %`}
            />
          </>
        ) || <Loading />}
            <div className="flex mt-2 w-auto">
            <p className="bg-green-200 p-2 ml-auto rounded-lg flex-grow text-center">made by <a href="https://github.com/thelocalgodd">thelocalgodd 👾</a></p>
            </div>
        </div>    
    </div>
    </>
  )
}

export default Weather;