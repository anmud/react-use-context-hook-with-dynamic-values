import {useContext} from 'react'
import {UserDetailsContext} from '../provider-components/UserDetailsContext'

const useDetailsHook = () => {

    const [userDetails, updateUserDetails] = useContext(UserDetailsContext)


    const setUserDetails = ({ name, dateOfBirth, email, secretQuestion, secretAnswer}) => {
    return  updateUserDetails({
       ...userDetails,
        name: name,
        dateOfBirth: dateOfBirth,
        email: email,
        secretQuestion: secretQuestion,
        secretAnswer: secretAnswer })
    }

  const updateInfo = (name, value) => {
      updateUserDetails({
          ...userDetails,
          [name]: value
      })
  }

    return {
          setUserDetails,
          updateInfo,
          name: userDetails.name,
          dateOfBirth: userDetails.dateOfBirth,
          email: userDetails.email,
          secretQuestion: userDetails.secretQuestion,
          secretAnswer: userDetails.secretAnswer
      }
    
};

export default useDetailsHook;