import React, { useState, useContext } from 'react'
import LoadingContext from '../loadingContext'
import useDetailsHook from '../hooks/useDetailsHook'


const Login = () => {

  const { showLoading } = useContext(LoadingContext)

  const {setUserDetails} = useDetailsHook();


  const [login, setLogin] = useState({
      email: '',
      password: ''
  })

  const handleChange = event => {
    const { name, value} = event.target
   return setLogin({...login, [name]: value})
  }

   const authenticate = (email) => {
    // Make request to auth endpoint if this was for real, but it's not :)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: 'Ana Mo',
          dateOfBirth: '01/12/1984',
          email: email,
          secretQuestion: 'What is my favourite movie?',
          secretAnswer: 'The Way of the Dragon'
        })
      }, 2500)
    })
  }

  const authenticateUser =  ({email, password}) => {
    showLoading()
    authenticate(email, password)
   .then(userDetails => {
     console.log("user details from login",userDetails)
      const {  name, dateOfBirth,  email, secretQuestion,secretAnswer} = userDetails 
      setUserDetails({  name, dateOfBirth,  email, secretQuestion,secretAnswer})
    })
  }

  return (
    
    <div>
       <h1>Login</h1>

        <label></label>
        <input  
        type="text"
        name='email'  
        value={login.email} 
        onChange={handleChange}
        placeholder="email"
        />
        <br/>
        <input
        name='password'
        type='text'
        value={login.password}
        onChange={handleChange}
        placeholder="password"
        />
       <br/>
        <button onClick={() => authenticateUser({email: login.email, password: login.password, authenticate: authenticate})}>log in</button>
        <br/>
        <br/>
        <pre>{JSON.stringify(login, null, 4)}</pre>
        <hr/>
    </div>
       
    

  )
}

export default Login;