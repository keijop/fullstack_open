import React, { useState, useEffect } from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter' 
import PersonForm from './components/PersonForm' 
import Message from './components/Message' 
import axios from 'axios'
import services from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [ filter, setFilter] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ message, setMessage] = useState('')
  //{type:'error', text:'big fat fail'}


  const baseUrl = 'http://localhost:3001/persons'

  // async function is nested as per react console.log warning/instructions:
  // 'Effect callbacks are synchronous to prevent race conditions. Put the async function inside...' 
  const hook = ()  => { 
    const fetchData = async () =>{
      try {
        const response = await axios.get(baseUrl)
        setPersons(response.data)
      } catch(e) {
        console.log(e);
      }
    }
    fetchData()
  }

  useEffect(hook, [])

  const filterChangeHandler = (event) => {
    setFilter(event.target.value)
  }  

  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  const phoneCangeHandler = (event) => {
    setNewNumber(event.target.value)
  }

  const submitHandler = async (event) => {
    try {
      event.preventDefault()

      const newPerson = {name : newName, number : newNumber}

      if(persons.find(person => person.name === newName && person.number === newNumber)){
          return alert(`${newName} is already added to phonebook`)
      }

      if(persons.find(person => person.name === newName)){
        if(!window.confirm(`${newName} already exists in phonebook, replace phone number?`)) return
        
        const id = persons.find(person => person.name === newName).id
        const response = await services.updatePerson(newPerson, id)
        let updatedPersons = [...persons]
        const index = updatedPersons.findIndex(person => person.id === id)
        updatedPersons[index] = response.data

        setMessage({type:'success', text:'Contact updated'})
        setTimeout(() => setMessage(''), 3000)        

        setPersons(updatedPersons)    
      }else{
        const response = await services.addPerson(newPerson)

        setMessage({type:'success', text:'Contact added'})
        setTimeout(() => setMessage(''), 3000)

        setPersons( [ ...persons, response.data] )
      }
      
    } catch(e) {
      console.log(e);
    }

  }

  const deleteHandler = async (event) => {
    try {

      if (!window.confirm('Delete contact')) return

      const result = await services.deletePerson(event, baseUrl)

      if(result instanceof Error) {
      setMessage({type:'error', text:'Contact has already been removed from database'})
      setTimeout(() => setMessage(''), 3000)
      return
      }

      setMessage({type:'success', text:'Contact deleted'})
      setTimeout(() => setMessage(''), 3000)

      setPersons(persons.filter( person => person.id !== Number(event.target.value))) 

    } catch(e) {
      console.log(e);
    }
  }

  // case insensitive solution: str.toLowerCase().startsWith(substr.toLowerCase())
  const filteredContactList = persons.filter( person => person.name.startsWith(filter))
  const contactList = !filter ? persons : filteredContactList

 return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} changeHandler={filterChangeHandler} />
      <Message message={message} />
      <PersonForm 
        newName={newName}
        nameChangeHandler={nameChangeHandler}
        newPhone={newNumber}
        phoneCangeHandler={phoneCangeHandler}
        submitHandler={submitHandler} 
      />
      <Contacts contactList={contactList} clickHandler={deleteHandler} />
    </div>
  )

}

export default App