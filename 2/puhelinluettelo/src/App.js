import React, { useState } from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter' 
import PersonForm from './components/PersonForm' 


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  
  const [ filter, setFilter] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const filterChangeHandler = (event) => {
    setFilter(event.target.value)
  }  

  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  const phoneCangeHandler = (event) => {
    setNewPhone(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)){
      return alert(`${newName} is already added to phonebook`)
    }
    setPersons( [ ...persons, {name : newName, phone : newPhone} ] )
  }

  // case insensitive solution: str.toLowerCase().startsWith(substr.toLowerCase())
  const filteredContactList = persons.filter( person => person.name.startsWith(filter))
  const contactList = !filter ? persons : filteredContactList

 return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} changeHandler={filterChangeHandler} />
      <PersonForm 
        newName={newName}
        nameChangeHandler={nameChangeHandler}
        newPhone={newPhone}
        phoneCangeHandler={phoneCangeHandler}
        submitHandler={submitHandler} 
      />
      <Contacts contactList={contactList} />
    </div>
  )

}

export default App