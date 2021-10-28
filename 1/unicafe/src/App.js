import React, { useState } from 'react'

const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button> 

const StatisticLine = ({text, value}) => {
  //return <p>{text}: {value}</p>
  return <>{value}</>
}

const Statistics = ({good, neutral, bad}) => {

  if(!good && !bad && !neutral) return <p>No feedback given</p>
  
  return ( 
    <table>
      <tbody>
        <tr>
          <td>Good</td>
          <td><StatisticLine value={good} /></td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td><StatisticLine value={neutral} /></td>
        </tr>
        <tr>
          <td>Bad</td>
          <td><StatisticLine value={bad} /></td>
        </tr>
        <tr>
          <td>Total</td>
          <td><StatisticLine value={totalFeedback(good, neutral, bad)} /></td>
        </tr>
        <tr>
          <td>Average</td>
          <td><StatisticLine value={average(good, neutral, bad)} /></td>
        </tr>
        <tr>
          <td>Positive</td>
          <td><StatisticLine value={positiveFeedback(good, neutral, bad)} /></td>
        </tr> 
      </tbody>            
    </table> 
  )
}

  const totalFeedback = (good, neutral, bad) => ( good + neutral + bad )

  // good = +1,  bad = -1, neutral = 0 
  const average = (good, neutral, bad) =>{
    return ( ( good - bad ) / ( good + bad + neutral) ).toFixed(1)
  }

  // % of positive out of total feedback
  const positiveFeedback = (good, neutral, bad) => {
   return ( good / ( good + neutral + bad ) * 100 ).toFixed(1) + '%'
  }

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => setGood(good +1)
  const neutralHandler = () => setNeutral(neutral +1)
  const badHandler = () => setBad(bad +1)


  return (
    <div>
      <h1>Give feedback</h1>
      <Button clickHandler={goodHandler} text='Good' />
      <Button clickHandler={neutralHandler} text='Neutral' />
      <Button clickHandler={badHandler} text='Bad' />
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
