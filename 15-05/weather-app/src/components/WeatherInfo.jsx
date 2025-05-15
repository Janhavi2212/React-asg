const WeatherInfo = ({ weatherData }) => {
    return (
        <div className="weather-info">
            <h2>{weatherData.name}</h2>
            <p>Condition: {weatherData.weather[0]?.description}</p>
            <p>Temperature: {weatherData.main?.temp}°C</p>
            <p>Humidity: {weatherData.main?.humidity}%</p>
            <p>Wind Speed: {weatherData.wind?.speed} m/s</p>
        </div>
    );
};

export default WeatherInfo;