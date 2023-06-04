function formatDate(timestamp) {
    let date_format = "12";
    let date = new Date(timestamp);
    let hours = date.getHours();
    let dt = date.getDate();

    let result = hours;
    let ext = "";
    if (hours < 10) {
        hours = ` 0 ${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0 ${minutes}`;
    }
    if (dt < 10) {
        dt = `0${dt}`;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (date_format == "12") {
        if (hours > 12) {
            ext = "PM";
            hours = hours - 12;
            result = hours;

            if (hours < 10) {
                result = "0" + hours;
            } else if (hours == 12) {
                hours = "00";
                ext = "AM";
            }
        } else if (hours < 12) {
            result = hours < 10 ? "0" + hours : hours;
            ext = "AM";
        } else if (hours == 12) {
            ext = "PM";
        }
    }

    let days = ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let month = months[date.getMonth()];

    return `${day} ${month} ${dt}  ${hours}:${minutes} ${ext}`;
}

//function formatDay(timestamp) {
//  let date = new Date(timestamp * 1000);
//let day = date.getDay();
//let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//return day[days];
//}

function displayTemp(response) {
    let currentTemperature = document.querySelector("#temperature");
    let city = document.querySelector("#city");
    let feelsLike = document.querySelector("#feels-like");
    //let logo = document.querySelector("#sun-logo");
    let humidity = document.querySelector("#humidity");
    let pressure = document.querySelector("#pressure");
    let wind = document.querySelector("#wind");
    let date = document.querySelector("#date-time");
    let description = document.querySelector("#description");
    let icon = document.querySelector("#icon");

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
    date.innerHTML = formatDate(response.data.time * 1000);
    description.innerHTML = `(${response.data.condition.description})`;

    icon.setAttribute =
        ("src",
        `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon_url}.png`);
}

let apiKey = "fa90t5bf5523344e459f280fabbb9o83";
let city = "santa clara";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemp);
