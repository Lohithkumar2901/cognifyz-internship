async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const response = await fetch(`http://localhost:5000/api/external/weather/${city}`);
  const data = await response.json();

  document.getElementById("result").innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Condition: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
}
