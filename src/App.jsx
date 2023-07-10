import React from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import InputField from "./components/InputField";
import WeatherCard from "./components/WeatherCard";
import TestAPI from "./components/testAPI";

export default function App() {
    return (
        <div className="container">

            {/* <InputField /> */}
            <TestAPI/>

        </div>
    )
}