import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Display from './components/Display'


function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect( () =>{
    
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
      } catch(e) {
        console.log('error:', e);
      }
    }
    fetchCountries()

  }, [])


  const filterChangeHandler = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountryList = countries.filter( country => {
    return country.name.common.toLowerCase().startsWith(filter.toLowerCase())
  })

  const countryList = !filter ? countries : filteredCountryList

  const clickHandler = (event) => {
    setFilter(event.target.value)
  }
 
  let city
  const weatherAPI_URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`

  return (
    <div className="App">
      <Filter filter={filter} changeHandler={filterChangeHandler} />
      <Display countryList={countryList} clickHandler={clickHandler}/>
    </div>
  );
}

export default App;
