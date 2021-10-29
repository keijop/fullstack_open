const Filter = ({filter, changeHandler}) => {
  return(
     <div>
      show names starting with: <input value={filter} onChange={changeHandler} />
    </div>
    ) 
}

export default Filter