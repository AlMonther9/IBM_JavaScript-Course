function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apikey = '0d33efc4d0d01fe8d9b4c4ede8b5cef8';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tempCelsius = (data.main.temp - 273.15).toFixed(2);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${tempCelsius} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}
document.getElementById('weatherForm').addEventListener('submit',showWeatherDetails);