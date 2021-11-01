const Message = ({message}) => {
	if(!message) return null
		
	return(  
		<div className={`message ${message.type === 'error' ? 'error' : 'success' }`}>
		{message.text}
		</div>
		)
}
export default Message

