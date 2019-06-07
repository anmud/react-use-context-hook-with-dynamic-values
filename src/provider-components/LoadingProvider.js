import React, { useState } from 'react'
import LoadingContext from '../loadingContext'

const LoadingProvider = ({ children }) => {
  /**
   * Loading state/controls
   */

  const showLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loadingCount: true
      }
    })
  }

  const hideLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loadingCount: false
      }
    })
  }

  

  const [loading, toggleLoading] = useState({
    loadingCount: false,
    showLoading,
    hideLoading
  }
)

  return (
    <LoadingContext.Provider value={loading}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingProvider