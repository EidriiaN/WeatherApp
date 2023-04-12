import React, { useState, useEffect } from "react";
import axios from "axios";



export default function WeatherCard(props){

    if(props.data.name){

        return(
            <div className="card--main">
                <div className="card">
                    <div className="card--city">
                        <p className="card--city-name">{props.data.name}</p>
                        <p className="card--city-description">{props.data.weather[0].main}</p>
                    </div>
                    <div className="card--info">
                        <p><i className="fa-regular fa-sun"></i><span>{props.data.main.feels_like} °C</span></p> 
                        <p><i className="fa-solid fa-wind"></i><span>{props.data.wind.speed} m/s</span></p>
                        <p><i className="fa-solid fa-droplet"></i><span>{props.data.main.humidity} %</span></p> 
                        {/* <p><i className="fa-solid fa-cloud-rain"></i><span>{props.precipitation} L/m²</span></p> */}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(

            <div className="card--main">
                <div className="card">
                    <div className="card--city">
                        <p className="card--city-name">City</p>
                        <p className="card--city-description">Weather</p>
                    </div>
                    <div className="card--info">
                        <p><i className="fa-regular fa-sun"></i><span>Temperature</span></p> 
                        <p><i className="fa-solid fa-wind"></i><span>Wind speed</span></p>
                        <p><i className="fa-solid fa-droplet"></i><span>Humidity</span></p> 
                        {/* <p><i className="fa-solid fa-cloud-rain"></i><span>Precipitation</span></p> */}
                    </div>
                </div>
            </div>
        )
    }
}