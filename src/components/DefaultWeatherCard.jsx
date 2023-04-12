import React from "react";

export default function DefaultWeatherCard(props) {

    return (

        <div className="card">
            <div className="card--city">
                <p className="card--city-name">City</p>
                <p className="card--city-description">Weather</p>
            </div>
            <div className="card--info">
                <p><i className="fa-regular fa-sun"></i><span>Temperature</span></p>
                <p><i className="fa-solid fa-wind"></i><span>Wind speed</span></p>
                <p><i className="fa-solid fa-droplet"></i><span>Humidity</span></p>
                <p><i className="fa-solid fa-cloud-rain"></i><span>Precipitation</span></p>
            </div>
        </div>
    )
}