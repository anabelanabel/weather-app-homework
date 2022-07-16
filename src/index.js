function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#inputcity");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${cityInput.value}`;
  let apiKey = "3ce209b8047a12ec6d4a03afe5ecbc6d";
  let apiUrlCurrentCity = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrlCurrentCity).then(showTemperature);
}
function showTemperature(response) {
  let currentTemp = Math.round(response.data.main.temp);

  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = `${currentTemp}`;
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeed = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${windSpeed}`;
  let iconElement = document.querySelector("#icon");

  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;

  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
function fromCelsiusToFahrenheit(event) {
  celsiusTemperature = response.data.main.temp;
  let temperatureFElement = document.querySelector("#temperature");
  let farenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  temperatureFElement.innerHTML = Math.round(farenheitTemp);
}
let cityForm = document.querySelector("#search-city");
cityForm.addEventListener("submit", showCity);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[now.getDay()];
let newDay = document.querySelector("#current-day");
newDay.innerHTML = `${currentDay}`;
let hour = now.getHours();
hour = hour <= 9 ? "0" + hour : hour;
let minutes = now.getMinutes();
minutes = minutes <= 9 ? "0" + minutes : minutes;
let currentMinutes = now.getMinutes();
document.getElementById("current-time").innerHTML = `${hour}: ${minutes}`;

let apiKey = "3ce209b8047a12ec6d4a03afe5ecbc6d";
let units = "metric";
let city = `${cityInput.value}`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);

let farenheitLink = document.querySelector("#farenheit");
farenheitLink.addEventListener("click", fromCelsiusToFahrenheit);

let celsiusLink = document.querySelector("#celcius");
celsiusLink.addEventListener("click", showTemperature);

search("London");
