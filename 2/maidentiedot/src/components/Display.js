import Country from './Country'
import DetailedCountry from './DetailedCountry'
import Button from './Button'


const Display = ({countryList, clickHandler}) => {


  if(countryList.length === 1){
      return <DetailedCountry country={countryList[0]} />
  }else if (countryList.length > 10) {
    return <p>Too many matches, add more filters</p>
  }else{ 
    return countryList.map( country => { 
      return ( 
              <div key={country.cca2}>
                <Country country={country}/> <Button country={country} clickHandler={clickHandler}/>
              </div>
        )
        }      
      )
  }
}

export default Display