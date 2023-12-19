const apiKey = "db6a619abc8f4952872160834231812";
const url = "https://api.weatherapi.com/v1/current.json";

const searchBox = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", getCity);

function getCity() {
  const city = searchBox.value;
  checkTemp(city);
}

async function checkTemp(city) {
  const response = await fetch(url + `?key=${apiKey}&q=${city}`);

  if (!response.ok || response.status === 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    }else{
      const data = await response.json();
      // console.log(data);

      document.querySelector(".city").innerHTML = `${data.location.name},${data.location.country}`;
      document.querySelector(".temp").innerHTML = `${data.current.temp_c}°C`;
      document.querySelector(".humidity").innerHTML = `${data.current.humidity}%`;
      document.querySelector(".wind").innerHTML = `${data.current.wind_kph} Km/h`;

      document.querySelector(".weather-icon").src = data.current.condition.icon;

      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";


    }
}

