import React, { useState, createContext } from 'react'

const UserDetailsContext = createContext()

const UserDetailsProvider = ({ children }) => {

 const [userDetails, updateUserDetails] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
  })

  return (
    <UserDetailsContext.Provider value={[userDetails, updateUserDetails]}>
      {children}
    </UserDetailsContext.Provider>
  )
}

export  {UserDetailsContext, UserDetailsProvider};
