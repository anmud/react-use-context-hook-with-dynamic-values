import React, {useContext} from 'react'

import Login from '../components/Login'
import UserProfile from '../components/UserProfile'
import LoadingContext from '../loadingContext'

const Main = () => {

const { loadingCount } = useContext(LoadingContext)

  return (
        <div>
          
           { loadingCount ? (
               <div>
                   <UserProfile  />
               </div>
           ) 
           : (
            <Login  />
           )
        }
          
       
        </div>
         
  )
}

export default Main