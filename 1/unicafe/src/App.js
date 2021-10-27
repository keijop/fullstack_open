import React, { useState } from 'react'

const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button> 

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => setGood(good +1)
  const neutralHandler = () => setNeutral(neutral +1)
  const badHandler = () => setBad(bad +1)

  // good = +1,  bad = -1, neutral = 0 
  const average = () =>{
    return ( good - bad ) / ( good + bad )
  }

  // % of positive out of total feedback
  const positiveFeedback = () => {
    return // TO DO
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button clickHandler={goodHandler} text='Good' />
      <Button clickHandler={neutralHandler} text='Neutral' />
      <Button clickHandler={badHandler} text='Bad' />
      <h2>Statistics</h2>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total number of feedback: {good + neutral + bad}</p>
      <p>Average feedback on 0-1 scale: {average()} </p>
    </div>
  )
}

export default App
