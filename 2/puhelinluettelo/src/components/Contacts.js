import Person from './Person'

  const Contacts = ({contactList, clickHandler}) => {
    return (
      <div>
        <h2>Contacts</h2>
        {contactList.map( person => 
          < Person key={person.id} person={person} clickHandler={clickHandler}/>
          )}
      </div>

      )
  }

export default Contacts