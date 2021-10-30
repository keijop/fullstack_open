import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'
import Display from './components/Display'


function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () =>{
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
      } catch(e) {
        
        console.log('error:', e);
      }
    }

    fetchCountries()
  }

  useEffect(hook, [])

  console.log('countries', countries)

  const filterChangeHandler = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountryList = countries.filter( country => {
    return country.name.common.toLowerCase().startsWith(filter.toLowerCase())
  })
  const countryList = !filter ? countries : filteredCountryList




  return (
    <div className="App">
      <Filter filter={filter} changeHandler={filterChangeHandler} />
      <Display countryList={filteredCountryList} />
    </div>
  );
}

export default App;
