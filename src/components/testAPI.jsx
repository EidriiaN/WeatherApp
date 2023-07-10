import React from "react";
import callAPI from "../scripts/callAPI2.js"

export default function testAPI(){

    let data = callAPI;

    console.log("data", data);
    

    return(

        <div>

            <h1>Hello DATA</h1>

        </div>
    )
}