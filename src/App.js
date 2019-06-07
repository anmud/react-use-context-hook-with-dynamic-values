import React from 'react'
import Main from './components/Main'



import LoadingProvider from '../src/provider-components/LoadingProvider'
import {UserDetailsProvider} from './provider-components/UserDetailsContext'

const App = () => (
  <>
   
    <LoadingProvider>
      
      <UserDetailsProvider>
       <Main/>
      </UserDetailsProvider>
    </LoadingProvider>
  </>
)

export default App
