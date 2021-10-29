import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  
  const [ newName, setNewName ] = useState('')

  const changeHandler = (event) => {
    setNewName(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setPersons( [ ...persons, {name : newName} ] )
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={changeHandler} />
        </div>
        <div>
          <button onClick={submitHandler} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map( person => <p key={person.name} >name : {person.name} </p>)}
    </div>
  )

}

export default App