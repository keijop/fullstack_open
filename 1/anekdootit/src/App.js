import React, { useState } from 'react'

const Button = ({clickHandler, text}) => {
  return <button onClick={clickHandler}>{text}</button>
}

const Display = ({heading, text}) => {
  return( 
    <div> 
      <h1>{heading}</h1>
      <p>"{text}"</p>
    </div>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(7).fill(0))
  const [maxVotes, setMaxVotes] = useState(0)

  // copy votes array, alter copied array,
  // set copied-altered array as new state
  // compute maxVotes value from altered array
  // set computed value as new state
  const voteHandler = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
    setMaxVotes( copy.indexOf( Math.max(...copy) ) )
  }

  // set random int between 0 (inclusive) and 7 (exclusive) as new state
  const nextHandler = () => {
    const getRandomInt = (max) =>  Math.floor(Math.random() * max);
    setSelected(getRandomInt(7))
  }

  return (
    <div>
      <Display heading='Anecdote of the day' text={anecdotes[selected]} />
      <Button text='vote' clickHandler={voteHandler} />
      <Button text='next anecdote' clickHandler={nextHandler}/>
      <Display heading='Anecdote with most votes' text={anecdotes[maxVotes]} />
    </div>
  )
}

export default App