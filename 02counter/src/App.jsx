import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {
    // if(counter<20){ // for assignment by hitesh sir
      counter = counter+1
      setCounter(counter)
    // }
    // console.log("value Added",Math.random())

    //interview question

    // setCounter(() => {})

    // setCounter(prevCounter => prevCounter + 1) 
    // setCounter(prevCounter => prevCounter + 1) 
    // setCounter(prevCounter => prevCounter + 1) 
    // setCounter(prevCounter => prevCounter + 1) 
  }

  const removeValue = () => {
    // if(counter >2){
      counter = counter-1
      setCounter(counter)
    // }
  }

  

  return (
    <>
      <h1>chai and vishal</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
