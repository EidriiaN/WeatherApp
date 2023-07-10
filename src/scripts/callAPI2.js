const apiKey = "187660880dcb3b894d9fbe3ab7efa20d";
const city ="Ploiesti";
const days = 4;
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${days}&appid=${apiKey}`;

async function getWeatherData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const weatherData = data.list;
    console.log(weatherData);
    return Promise.resolve(weatherData);
  } catch (error) {
    console.log(error);
  }
}

export default getWeatherData();


// if (navigator.geolocation) {
// 	navigator.geolocation.getCurrentPosition(
//     position => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       return latitude, longitude
//     },
//     error => {
//       console.log(error);
//     }
//   );
// } else {
//   console.log("Geolocation nu este suportat în acest browser.");
// }


