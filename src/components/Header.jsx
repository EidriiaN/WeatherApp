import React, {useState} from "react";
import WeatherCard from "./WeatherCard";
import WeatherDisplay from "./WeatherDisplay";
import axios from "axios";

let data, setData
export default function Header(){

    [data, setData] = useState({})
    const [location, setLocation] = useState('')


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=187660880dcb3b894d9fbe3ab7efa20d`

    const searchLocation = (event) => {

        if(event.key === 'Enter'){

            axios.get(url).then((response) =>{
                setData(response.data)
                
                console.log("asdasd",response.data)
            })
            setLocation('')
        }
    }

    return(

        <div className="header">
            <div className="input">

                <input 
                value={location} 
                onChange={event => setLocation(event.target.value)}
                onKeyDown={searchLocation}
                type="text" 
                placeholder="Enter Location" />

            </div>
        </div>

    )

}
export {data};