import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imageSrc from './pexels-lilartsy-2838511.jpg';
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : "vishal",
    age: 24
  }
  return (
    <>
   <h1 className="bg-green-400 text-black p-4 rounded mb-4">Tailwind Test</h1>
   <Card channel="chai aur code" someObj = {myObj} btnText="click me"/>
   <Card channel="Vishal" btnText="Visit me"/>


    </>
  )
}

export default App
