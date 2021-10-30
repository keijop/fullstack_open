const Filter = ({filter, changeHandler}) => {
  return(
     <div>
      show countries starting with: <input value={filter} onChange={changeHandler} />
    </div>
    ) 
}

export default Filter