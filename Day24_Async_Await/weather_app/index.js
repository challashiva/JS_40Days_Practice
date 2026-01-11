const API_KEY = "7292a93461210afd0d41551879ff65ad";

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  try {
    showLoading();
    const res = await fetch(url);

    if (!res.ok) throw new Error("City is not found!");

    const data = await res.json();
    console.log(data);

    displayWeather(data);
  } catch (error) {
    displayError(error);
  } finally {
    hideLoading();
  }
}

function displayWeather(data) {
  document.querySelector("#weatherSection").innerHTML = `
        <h1>${data.name}</h1>
        <p>Temp:<b> ${Math.round(data.main.temp - 273.15)} °C</b></p>
        <p>Condition:<b> ${data.weather[0].description}</b></p>
        <img src="http://openweathermap.org/img/w/${
          data.weather[0].icon
        }.png" />
    `;
}

function displayError(error) {
  document.querySelector(
    "#weatherSection"
  ).innerHTML = `<p style="color:red">${error}</p>`;
}

document.querySelector("#searchBtn").addEventListener("click", () => {
  const searchText = document.querySelector("#cityInput").value;
  if (searchText) {
    getWeather(searchText);
  }
});

function showLoading() {
  document.querySelector("#loading").innerHTML = "⌛️ Loading.....";
}
function hideLoading() {
  document.querySelector("#loading").innerHTML = "";
}
