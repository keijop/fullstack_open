const Person = ({person, clickHandler}) => {
  return <p>{person.name} {person.number} <button value={person.id} onClick={clickHandler}>delete</button></p>
}

export default Person