import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox"; 
import { useState } from "react";

export default function WeatherApp (){
    const [weatherInfo, setWeatherInfo]= useState({
            city: "Enter the city name",
            // feelsLike : 24.84,
            temp: "Temperature of the place in ",
            tempMin:"Minimum temperature",
            tempMax: "Maximum temperature",
            humidity: "Humidity of the place",
            weather: "Type of weather",
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{ textAlign:"center"}}>
            <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/> 
        </div>
    );
}