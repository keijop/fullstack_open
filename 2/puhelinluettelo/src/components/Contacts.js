import Person from './Person'

  const Contacts = ({contactList}) => {
    return (
      <div>
        <h2>Contacts</h2>
        {contactList.map( person => < Person key={person.name} person={person}/>)}
      </div>

      )
  }

export default Contacts