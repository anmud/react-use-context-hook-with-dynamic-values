import React, { useContext } from 'react'
import useDetailsHook from '../hooks/useDetailsHook'




const UserProfile = () => {

  const {setUserDetails, 
        updateInfo,
        name,
        dateOfBirth,
        email,
        secretQuestion,
        secretAnswer} = useDetailsHook();

  // const {
  //   name,
  //   dateOfBirth,
  //   email,
  //   secretQuestion,
  //   secretAnswer,
  // } = useContext(UserDetailsContext)

  const handleChange = event => {
    const { name, value} = event.target
   return updateInfo(name, value)
  }

  console.log("set user details func", setUserDetails)

  return (

    <div>
         <br/>
         <br/>
        <h1>My Details</h1>


        <p>Name: {name}</p>
        <p>Date of birth: {dateOfBirth}</p>
        <p>Email: {email}</p>
        <p>Secret Question: {secretQuestion}</p>
        <p>Secret Answer: {secretAnswer}</p>
         

         <hr/>

        <h3>You can update your details in a form</h3>
       
       
        <label>Name </label>
       <input
          name='name'
          value={name}
          onChange={handleChange}
        />
        <br/>
         <label>Date of birth </label>
        <input
          name='date of birth'
          value={dateOfBirth}
          onChange={handleChange}
        />
        <br/>
         <label>Email </label>
        <input
          name='email'
          value={email}
          onChange={handleChange}
        />
        <br/>
         <label>Secret question </label>
        <input
          name='secretQuestion'
          value={secretQuestion}
          onChange={handleChange}
        />
        <br/>
         <label>Secret answer </label>
        <input
          name='secretAnswer'
          value={secretAnswer}
          onChange={handleChange}
        />
        
       
        


    </div>
        
  )
}

export default UserProfile