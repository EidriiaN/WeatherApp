import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import DaysWeatherCard from "./DaysWeatherCard";
import IntroTitle from "./IntroTitle";
import axios from "axios";

let data, setData
export default function Header() {

    [data, setData] = useState({})
    const [location, setLocation] = useState('')


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&cnt={4}&appid=187660880dcb3b894d9fbe3ab7efa20d`

    const searchLocation = (event) => {

        if (event.key === 'Enter') {

            axios.get(url).then((response) => {
                setData(response.data)
                setPage(<WeatherCard data={data} />)

                console.log("API", response.data)
            })
            setLocation('')
        }
    }


    const [page, setPage] = useState()

    const handleClick = (event) => {

        const id = event.target.dataset.id
        switch (id) {
            case "1":
                setPage(<WeatherCard data={data} />)
                break;

            case "2":
                if(data.name){
                    setPage(<DaysWeatherCard data={data}/>)
                    
                }
                else{
                    setPage(<DaysWeatherCard/>)
                }
                break;

            default:
                setPage(<WeatherCard />)
                break;
        }
    }


    return (

        <>
            <div className="input--Field">
                <div>
                    <button className="btn-days" onClick={handleClick} data-id="1">One day</button>
                </div>
                <div className="input">

                    <input
                        value={location}
                        onChange={event => setLocation(event.target.value)}
                        onKeyDown={searchLocation}
                        type="text"
                        placeholder="Enter Location" />

                </div>
                <div>
                    <button className="btn-days" onClick={handleClick} data-id="2">Days</button>
                </div>
            </div>

            <IntroTitle />
            {page}
        </>

    )

}