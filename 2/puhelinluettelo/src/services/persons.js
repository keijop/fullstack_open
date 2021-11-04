import axios from 'axios'

const baseUrl = '/api/persons'

const addPerson = async (newPerson) => {
  try {
    const response = await axios.post(baseUrl, newPerson)
    return response
  } catch(e) {
    return e
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
      const response = await axios.delete(url)
      return response
    } catch(e) {
      console.log(e);
    	return e
    }
}

export default {addPerson, updatePerson, deletePerson}

