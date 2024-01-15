import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { red } from '@mui/material/colors';

export default function SearchBox({updateInfo}){
let[city,setCity]= useState("");
let[error,setError]= useState(false);
const API_URL ="https://api.openweathermap.org/data/2.5/weather";
const API_KEY ="1574470a29c15d185a2c065e8254b2a4";

let getWeatherInfo = async() =>{
    try{
        let response= await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse= await response.json();
    // console.log(jsonResponse);
    let result={
        city : city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        // feelsLike: jsonResponse.main.feels_Like,
        weather: jsonResponse.weather[0].description,
    };
    
    console.log(result);
    return result;
}catch (err){
    setError(true)
}
};

    let handleChange= (evt)=>{
        setCity(evt.target.value);
    };

let handleSubmit = async(evt) => {
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newinfo= await getWeatherInfo();
    updateInfo(newinfo);
    }catch(err){
        setError(true);
    }
};

    return(
        <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
        <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br />
        <br />
        <Button variant="contained" type="submit">Seaech</Button>
        </form>
        {error && <p style={{color: red}}>No such place exists in our API !</p>}
            </div>
    )
}