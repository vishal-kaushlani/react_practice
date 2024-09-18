import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
  <>
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}
    ></div>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-red-100 rounded-xl">
        <button className='outline-none px-4 bg-red-300' onClick={() => setColor('red')}>Red</button>
        <button className='outline-none px-4 bg-green-300' onClick={() => setColor('green')}>Green</button>
        <button className='outline-none px-4 bg-blue-300' onClick={() => setColor('blue')}>Blue</button>
      </div>
    </div>
  </>

  )
}

export default App
