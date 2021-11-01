import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const addPerson = async (newPerson) => {
  try {
    const response = await axios.post(baseUrl, newPerson)
    return response
  } catch(e) {
    console.log(e);
  }
}

const updatePerson = async (newPerson, id) => {
  try {
    const url = `${baseUrl}/${id}` 
    const response = await axios.put(url, newPerson)
    return response
  } catch(e) {
    console.log(e);
  }
}

const deletePerson = async (event) => {
	try {
      const url = `${baseUrl}/${event.target.value}`
      await axios.delete(url)
    } catch(e) {
      console.log(e);
    }
}

export default {addPerson, updatePerson, deletePerson}

