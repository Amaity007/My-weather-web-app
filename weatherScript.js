const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "f7889bcededb9ab794d8703da41b5124";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".showHumidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/4814/4814268.png";
    }

    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/414/414927.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/4088/4088981.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2930/2930095.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/3075/3075858.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2315/2315309.png";
    }
    // document.querySelector(".mainBody").style.display="block";
    // document.querySelector(".details").style.display="block";
}
searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
})
// checkWeather();
// ex:- https://api.openweathermap.org/data/2.5/weather?&units=metric&q=pune&appid=f7889bcededb9ab794d8703da41b5124
