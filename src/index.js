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
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${temperature}`;
}

let apiKey = "3ce209b8047a12ec6d4a03afe5ecbc6d";
let units = "metric";
let city = `${cityInput.value}`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
