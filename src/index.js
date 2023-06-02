function displayTemp(response) {
    console.log(response.data.temperature);
    let currentTemperature = document.querySelector("#temperature");
    let city = document.querySelector("#city");
    let feelsLike = document.querySelector("#feels-like");
    //let logo = document.querySelector("#sun-logo");
    let humidity = document.querySelector("#humidity");
    let pressure = document.querySelector("#pressure");
    let wind = document.querySelector("#wind");
    // let cityInput = document.querySelector("#city-input");
    currentTemperature.innerHTML = Math.round(
        response.data.temperature.current
    );

    city.innerHTML = response.data.city;
    feelsLike.innerHTML = Math.round(response.data.temperature.feels_like);
    // logo.innerHTML = response.data.condition.icon_url;
    humidity.innerHTML = response.data.temperature.humidity;
    pressure.innerHTML = response.data.temperature.pressure;
    wind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "fa90t5bf5523344e459f280fabbb9o83";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={london}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemp);
