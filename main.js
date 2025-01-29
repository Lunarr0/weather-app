const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const warning = document.getElementById("warning");
const forecastTime = document.getElementById("forecast-time");
const forecastTemperature = document.getElementById("forecast-temperature");
const forecastDescription = document.getElementById("forecast-description");

async function getWeather() {
  try {
    warning.innerHTML = "";
    cityName.innerHTML = "";
    temperature.innerHTML = "";
    description.innerHTML = "";
    document.getElementById('weather').style.display = 'none';
    document.getElementById('hourly-forecast').style.display = 'none';
    const city = document.getElementById("city").value;
    const apiKey = "34c6136ca1e724c27cd0e524ac728865";
    const units = "metric";
    const cnt = "12";
    // const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${apiKey}&units=${units}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&cnt=${cnt}&appid=${apiKey}&units=${units}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.cod == 400 || data.cod == 404) {
      warning.innerHTML = "This is not a valid location,  Input valid location";
      return;
    }


    document.getElementById('hourly-forecast').style.display = 'flex';
    temperature.innerHTML = `Temperature: ${data.list[0].main.temp}°C`;
    cityName.innerHTML = `City: ${data.city.name}`;
    description.innerHTML = `Weather: ${data.list[0].weather[0].description}`;
    
    // Show the weather container
    document.getElementById('weather').style.display = 'flex';

    const forecast = data.list.map((item) => ({
      date: item.dt_txt,
      temperature: item.main.temp,
      description: item.weather[0].description,
    }));
    // Get the container
    const forecastContainer = document.getElementById("hourly-forecast");
    // Clear previous forecasts
    forecastContainer.innerHTML = "";

    forecast.forEach((item) => {
      const forecastDiv = document.createElement("div");
      forecastDiv.className = "forecast-item";

      forecastDiv.innerHTML = `
            <p class="forecast-time">Time: ${item.date}</p>
            <p class="forecast-temperature">Temperature: ${item.temperature}°C</p>
            <p class="forecast-description">Weather: ${item.description}</p>
        `;

      forecastContainer.appendChild(forecastDiv);
    });

    // for a single element
    //     forecastTime.innerHTML = `Time: ${forecast.date}`;
    //     forecastTemperature.innerHTML = `Temperature: ${forecast.temperature}°C`;
    //    forecastDescription.innerHTML = `Weather: ${forecast.description}`;

    //console.log();
  } catch (error) {
    warning.innerHTML = "Something went wrong, please try again later";
    console.log(error);
  }
}
