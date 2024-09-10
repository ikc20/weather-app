import React, { useState } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setError(null); // Clear any previous errors
      } else {
        setError('Ville non trouvée. Veuillez réessayer.'); // Set error message
      }
    } catch (error) {
      console.error('Une erreur s\'est produite : ', error);
      setError('Erreur lors de la récupération des données météorologiques. Veuillez réessayer.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          <form onSubmit={(e) => {
            e.preventDefault();
            const city = e.target.elements.city.value;
            fetchWeatherData(city);
          }}>
            <label htmlFor="city">Ville :</label>
            <input type="text" id="city" name="city" required />
            <p>
              <button type="submit">Obtenir la météo</button>
            </p>
          </form>

          {weatherData && (
            <div className="weather-info">
              <h2>Météo pour {weatherData.name}, {weatherData.sys.country}</h2>
              <p>Température : {weatherData.main.temp} °C</p>
              <p>Description : {weatherData.weather[0].description}</p>
              {weatherData.weather[0].icon && (
                <img
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt="Conditions météorologiques"
                  className="weather-icon"
                />
              )}
            </div>
          )}

          {error && (
            <p className="error-message">{error}</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
