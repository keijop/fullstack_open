
const PersonForm = ({newName, 
					nameChangeHandler, 
					newPhone, 
					phoneCangeHandler, 
					submitHandler}) => {

	return(
		<form>
		    <h2>Add contact</h2>
		    <div>
		      name: <input value={newName} onChange={nameChangeHandler} />
		    </div>
		    <div>
		      phone: <input value={newPhone} onChange={phoneCangeHandler} />
		    </div>        
		    <div>
		      <button onClick={submitHandler} type="submit">add</button>
		    </div>
      	</form>
		)
} 





export default PersonForm