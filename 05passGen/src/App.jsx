import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  // const [count, setCount] = useState(0)
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)


// const passwordGenerator = useCallback(fn, dependencies) 
  // const passwordGenerator = useCallback(fn, [length,numberAllowed,charAllowed,setPassword])  

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str +=  "!@#$%^&*()"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length,numberAllowed,charAllowed,setPassword])
  
  const copyOnClipBoard = useCallback(() => {
    try{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
    console.log('copied to clipboard')
    }
    catch{

    }
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700 text-center' > 
        <h1>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password} 
            className='outline-none rounded-lg w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
            />
          <button
            onClick={copyOnClipBoard}
            type="button"
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className='cursor-pointer' 
            onChange={() => {setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            className='cursor-pointer' 
            onChange={() => {setCharAllowed((prev) => !prev)}}/>
            <label htmlFor="charInput">Special Character</label>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
