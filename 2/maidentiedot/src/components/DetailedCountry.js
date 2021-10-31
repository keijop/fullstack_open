import {useEffect, useState} from 'react'
import Weather from './Weather'
import axios from 'axios'

const DetailedCountry = ({country}) => {
	
	const [weather, setWeather] = useState(0)
	
	useEffect(()=>{

		const weatherAPIEndPoint=`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
		const getWeather = async () =>{
			try {
				const response = await axios.get(weatherAPIEndPoint)
				setWeather(response.data)
			} catch(e) {
				console.log(e);
			}
		}
		getWeather()
	}, [])

	

	return (
		<div>  
			<h3>{country.name.common}</h3>
			<p>capital : {country.capital}</p>
			<p>population : {country.population}</p>
			<b>languages:</b>
			{Object.values(country.languages).map(lang => {
				return <p key={lang}>{lang}</p>
			})}
			<div>{country.flag}</div>
			<Weather country={country} weather={weather}/>
		</div>

		)
}

export default DetailedCountry