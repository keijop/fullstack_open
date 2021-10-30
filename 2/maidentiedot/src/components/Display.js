import Country from './Country'

  const Display = ({countryList}) => {
    return (
      <div>
      {
          countryList.map( country => < Country key={country.cca2} country={country}/>)}
      </div>

      )
  }

export default Display