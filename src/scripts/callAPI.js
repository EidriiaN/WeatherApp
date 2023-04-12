import axios from "axios";
import { useState } from "react";

let data, location
let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&cnt={4}&appid=187660880dcb3b894d9fbe3ab7efa20d`

const searchLocation = async () => {
        const response = await axios.get(url);
        return Promise.resolve(response.data)
    }

const setLocation=(cityName)=>{

    location=cityName
    url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&cnt={4}&appid=187660880dcb3b894d9fbe3ab7efa20d`
}


export default {searchLocation,setLocation,data}