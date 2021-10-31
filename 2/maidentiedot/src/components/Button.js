const Button = ({country, clickHandler}) => {
	return <button value={country.name.common} onClick={clickHandler}>details</button>
}

export default Button