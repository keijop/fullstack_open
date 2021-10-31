
const Weather = ({country, weather}) => {
	if(!weather) return <p>Loading weather...</p>
	return (
		<div>
			<b>{country.capital} current weather</b>
			<div>
				<img alt='weather icon' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
			</div>
			<p>temp: {weather.main.temp} celcius</p>
			<p>wind: {weather.wind.speed} m/s, {weather.wind.deg} degrees;</p>
		</div>
	)	
}

export default Weather
