import React, {useState, useContext} from 'react'
import UserContext from '../context/usercontext'

function Login(){
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} =   useContext(UserContext)

    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username,password})

    }

    return(
        <div>
            <h2>Login</h2>
            <input type="text" onChange={(e) => setUsername(e.target.value)} name="" id="" placeholder='username'/>
            <input type="text" onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder='password'/>
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default Login